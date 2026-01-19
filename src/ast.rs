use crate::utils;

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct Text {
    parsed: Vec<(Span, Utterance)>,
    raw: String,
}

impl Text {
    pub fn new(raw: impl ToString) -> Self {
        let raw = raw.to_string();
        let mut input = raw.as_str();
        let mut parsed = Vec::new();

        let mut parsed_so_far = 0;
        while !input.is_empty() {
            if let Ok((new_input, utterance)) = crate::parser::parse_utterance(input) {
                let len = input.len() - new_input.len();
                let span = Span {
                    start: parsed_so_far,
                    end: parsed_so_far + len,
                };
                parsed.push((span, utterance));
                parsed_so_far += len;
                input = new_input;
            } else {
                // parsed_so_far += 1;
                // input = &input[1..];

                // Get the next space
                let next = input
                    .find(|c: char| c.is_ascii_punctuation() || c.is_whitespace())
                    .unwrap_or(input.len())
                    + 1;
                if next > input.len() {
                    break;
                }
                parsed_so_far += next;
                input = &input[next..];
            }
        }

        Self { parsed, raw }
    }

    pub fn spans(&self) -> impl Iterator<Item = &Span> {
        self.parsed.iter().map(|(span, _)| span)
    }

    pub fn utterances(&self) -> impl Iterator<Item = &Utterance> {
        self.parsed.iter().map(|(_, utterance)| utterance)
    }

    pub fn coverage_ratio(&self) -> f64 {
        let total_bytes = self.raw.len();
        let parsed_bytes: usize = self
            .parsed
            .iter()
            .map(|(span, _)| span.end - span.start)
            .sum();
        parsed_bytes as f64 / total_bytes as f64
    }

    pub fn raw_text(&self) -> &String {
        &self.raw
    }

    pub fn parsed_text(&self) -> String {
        self.parsed
            .iter()
            .map(|(span, _)| &self.raw[span.start..span.end])
            .collect::<Vec<_>>()
            .join(" ")
    }

    pub fn parsed(&self) -> &Vec<(Span, Utterance)> {
        &self.parsed
    }

    pub fn errors(&self) -> Vec<(Span, String)> {
        // The spaces between spans
        let mut last_end = 0;
        self.parsed
            .iter()
            .map(|(span, _)| {
                let space = &self.raw[last_end..span.start];
                last_end = span.end;
                (*span, space.to_string())
            })
            .filter(|(span, space)| !space.is_empty())
            .collect()
    }

    pub fn tag(&self) -> Vec<utils::TaggedWord> {
        utils::tag_text(self)
    }

    pub fn constituents(&self) -> Vec<utils::ConstituencyNode> {
        utils::build_tree(self)
    }
}

impl From<String> for Text {
    fn from(value: String) -> Self {
        Self::new(value)
    }
}

impl From<&str> for Text {
    fn from(value: &str) -> Self {
        Self::new(value)
    }
}

#[derive(Debug, Clone, Copy, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct Span {
    pub start: usize,
    pub end: usize,
}

impl Span {
    pub fn len(&self) -> usize {
        self.end - self.start
    }

    pub fn is_empty(&self) -> bool {
        self.len() == 0
    }

    pub fn get_text<'a>(&self, text: &'a str) -> &'a str {
        &text[self.start..self.end]
    }
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Utterance {
    Sentence(SentenceBlock),
    Interjection(Interjection),
    Vocative(VocativeCommand),
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct SentenceBlock {
    pub conjunction: Option<String>,
    pub contexts: Vec<Context>,
    pub main_clause: MainClause,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Context {
    Sentence(Box<SentenceBlock>),
    Prepositional(PrepositionalPhrase),
    Phrase(Phrase),
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum MainClause {
    Simple {
        subject: SubjectSimple,
        predicate: PredicateUnmarked,
    },
    General {
        subject: SubjectGeneral,
        predicate: PredicateMarked,
    },
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum SubjectSimple {
    Mi,
    Sina,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct SubjectGeneral {
    pub head: Phrase,
    pub tail: Vec<(ConjunctionSubject, Phrase)>,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum ConjunctionSubject {
    En,
    Anu,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PredicateUnmarked(pub PredicateCore);

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PredicateMarked(pub Vec<(PredicateMarker, PredicateCore)>);

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum PredicateMarker {
    Li,
    O,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PredicateCore {
    pub preverbs: Vec<PreverbPhrase>,
    pub head: HeadPredicate,
    pub direct_objects: Vec<Phrase>,
    pub prepositional_phrases: Vec<PrepositionalPhrase>,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PreverbPhrase {
    pub preverb: Preverb,
    pub ala: bool,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum HeadPredicate {
    Phrase(Phrase),
    Prepositional(PrepositionalPhrase),
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct Phrase {
    pub head: Word,
    pub modifiers: Vec<Modifier>,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Modifier {
    Word(Word),
    Pi(Phrase),
    Anu(Phrase),
    Nanpa(Number),
    Special(String), // kin, ala, taso, a
    ProperNoun(String),
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct Number(pub Vec<Word>);

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PrepositionalPhrase {
    pub preposition: Preposition,
    pub ala: bool,
    pub object: Phrase,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct VocativeCommand {
    pub target: Option<Phrase>,
    pub predicate: Option<PredicateCore>,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Interjection {
    Phrase { phrase: Phrase, a: bool },
    A,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Word {
    Content(String),
    Pronoun(Pronoun),
    Question(String), // seme
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Preposition {
    Lon,
    Tawa,
    Tan,
    Sama,
    Kepeken,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Preverb {
    Wile,
    Sona,
    Awen,
    Kama,
    Ken,
    Lukin,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Pronoun {
    Mi,
    Sina,
    Ona,
    Ni,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_text() {
        let text = Text::new(
            "mi sona ala e ni.
1. tenpo open la, toki li lon. toki li lon poka sewi. toki li sewi.
2. open la, ona li lon poka sewi.
3. ona la, ale li kama lon. ona ala la, ala li kama lon.
mi wile e ni: sina kama sona e toki pona! e

sina pona.
",
        );
        println!("{:#?}", text);
        println!("coverage: {}", text.coverage_ratio());
        println!("parsed text: {}", text.parsed_text());
    }
}

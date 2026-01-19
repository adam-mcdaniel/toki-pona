use crate::ast::*;
use crate::word::Word;
use chumsky::prelude::*;
use std::str::FromStr;

#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub enum Token {
    Word(Word),
    ProperNoun(String),
    Punctuation(char), // . : ,
}

impl std::fmt::Display for Token {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Token::Word(w) => write!(f, "{}", w),
            Token::ProperNoun(s) => write!(f, "{}", s),
            Token::Punctuation(c) => write!(f, "{}", c),
        }
    }
}

// Tokenizer: char -> Token
pub fn lexer() -> impl Parser<char, Vec<Token>, Error = Simple<char>> {
    token_parser().padded().repeated().flatten()
}

pub fn token_parser() -> impl Parser<char, Option<Token>, Error = Simple<char>> {
    let punctuation = one_of(".:,!?·;").map(Token::Punctuation);

    let ident = text::ident().map(|s: String| {
        if let Ok(w) = Word::from_str(&s) {
            Some(Token::Word(w))
        } else if let Ok(w) = Word::from_str(&s.to_lowercase()) {
            Some(Token::Word(w))
        } else if s.chars().next().map_or(false, |c| c.is_uppercase()) {
            Some(Token::ProperNoun(s))
        } else {
            None
        }
    });

    let header = just('#').then(take_until(text::newline())).ignored();
    // Allow === or --- for rules
    let hrule1 = just('=')
        .repeated()
        .at_least(2)
        .then(take_until(text::newline()))
        .ignored();
    let hrule2 = just('-')
        .repeated()
        .at_least(2)
        .then(take_until(text::newline()))
        .ignored();
    // Ignore verse numbers like "1." or "10."
    let number = text::int(10).then(just('.').or_not()).ignored();
    let parens = just('(').then(take_until(just(')'))).ignored();
    let brackets = just('[').then(take_until(just(']'))).ignored();

    let junk = choice((
        header,
        hrule1,
        hrule2,
        parens,
        brackets,
        number,
        any().ignored(),
    ));

    choice((punctuation.map(Some), ident, junk.map(|_| None)))
}

// Parser: Token -> AST
pub fn parser() -> impl Parser<Token, Program, Error = Simple<Token>> {
    let phrase = phrase_parser();

    let subject_mi = just(Token::Word(Word::Mi)).to(Subject::Mi);
    let subject_sina = just(Token::Word(Word::Sina)).to(Subject::Sina);
    let subject_composite = phrase
        .clone()
        .separated_by(just(Token::Word(Word::En)))
        .at_least(1)
        .map(Subject::Composite);

    let subject = subject_mi.or(subject_sina).or(subject_composite);

    let comma = just(Token::Punctuation(','));

    let prep_phrase = comma
        .clone()
        .or_not()
        .ignore_then(select! {
            Token::Word(w) if w.is_preposition() => w
        })
        .then(phrase.clone())
        .map(|(preposition, object)| PrepositionalPhrase {
            preposition,
            object,
        });

    let direct_object = comma
        .clone()
        .or_not()
        .ignore_then(just(Token::Word(Word::E)))
        .ignore_then(phrase.clone());

    let predicate_core = phrase
        .clone()
        .then(direct_object.repeated())
        .then(prep_phrase.clone().repeated())
        .map(|((head, direct_objects), mut prepositions)| {
            let (new_head, extracted_pps) = process_head(head);
            prepositions.splice(0..0, extracted_pps);
            Predicate {
                head: new_head,
                direct_objects,
                prepositions,
            }
        });

    let li = just(Token::Word(Word::Li));
    let li_sep = comma.clone().or_not().then(li.clone()).ignored();

    let predicates_rest = li_sep
        .clone()
        .ignore_then(predicate_core.clone())
        .repeated();
    let predicate_core_inner = predicate_core.clone();

    // Define normal_head (Subject + Predicates) early so we can reuse it
    let normal_head = subject
        .clone()
        .then_with(move |subj| {
            let is_mi_sina = matches!(subj, Subject::Mi | Subject::Sina);
            if is_mi_sina {
                predicate_core_inner
                    .clone()
                    .map(|p| vec![p])
                    .then(predicates_rest.clone())
                    .map(|(mut first, mut rest)| {
                        first.append(&mut rest);
                        first
                    })
                    .boxed()
            } else {
                li_sep
                    .clone()
                    .ignore_then(predicate_core_inner.clone())
                    .chain(predicates_rest.clone())
                    .boxed()
            }
            .map(move |predicates| (subj.clone(), predicates))
        })
        .map(|(subject, predicates)| Head::SubjectPredicate {
            subject,
            predicates,
        });

    let imperative_head = just(Token::Word(Word::O))
        .ignore_then(predicate_core.clone())
        .map(|pred| Head::PredicateOnly(vec![pred]));

    let optative_head = subject
        .clone()
        .then_ignore(just(Token::Word(Word::O)))
        .then(predicate_core.clone())
        .map(|(subject, predicate)| Head::Optative {
            subject,
            predicates: vec![predicate],
        });

    let head = normal_head
        .or(optative_head)
        .or(imperative_head)
        .or(phrase.clone().map(Head::Phrase));

    let sentence_end = select! {
        Token::Punctuation(c) if ".:!?;·".contains(c) => c
    };

    // Context can be a full sentence (Head only since context doesn't recurse) OR a phrase
    // We use 'head' which covers SubjectPredicate, PredicateOnly (imperative), and Phrase (fragment).
    let context_block = head
        .clone()
        .map(|h| match h {
            Head::Phrase(p) => ContextPart::Phrase(p),
            _ => ContextPart::Sentence(Box::new(NormalSentence {
                context: None,
                head: h,
            })),
        })
        .then_ignore(just(Token::Word(Word::La)))
        .then_ignore(comma.clone().or_not());

    let context = context_block
        .repeated()
        .at_least(1)
        .map(|parts| Context { parts })
        .or_not();

    let normal_sentence = context
        .then(head.clone())
        .map(|(context, head)| NormalSentence { context, head });

    let vocative_target = phrase
        .clone()
        .then_ignore(just(Token::Word(Word::O)))
        .then_ignore(comma.clone().or_not());

    let anu_seme = comma
        .clone()
        .or_not()
        .then(just(Token::Word(Word::Anu)))
        .then(just(Token::Word(Word::Seme)))
        .ignored();

    let normal_sentence_checked =
        normal_sentence
            .clone()
            .then(anu_seme.or_not())
            .map(|(sentence, anu_seme_opt)| {
                if anu_seme_opt.is_some() {
                    Sentence::Question(QuestionSentence {
                        sentence,
                        method: QuestionMethod::AnuSeme,
                    })
                } else if is_x_ala_x(&sentence) {
                    Sentence::Question(QuestionSentence {
                        sentence,
                        method: QuestionMethod::VerbAlaVerb,
                    })
                } else if contains_tan_seme(&sentence) {
                    Sentence::Question(QuestionSentence {
                        sentence,
                        method: QuestionMethod::Why,
                    })
                } else if contains_nasin_seme(&sentence) {
                    Sentence::Question(QuestionSentence {
                        sentence,
                        method: QuestionMethod::How,
                    })
                } else if contains_seme(&sentence) {
                    Sentence::Question(QuestionSentence {
                        sentence,
                        method: QuestionMethod::Seme(vec![Word::Seme]),
                    })
                } else {
                    Sentence::Normal(sentence)
                }
            });

    let vocative_sentence = vocative_target
        .then(normal_sentence_checked.clone().or_not()) // Command is optional
        .map(|(target, sent)| match sent {
            Some(Sentence::Question(q)) => Sentence::Question(q),
            Some(Sentence::Normal(n)) => Sentence::Vocative(VocativeSentence {
                target,
                command: Some(n),
            }),
            Some(Sentence::Vocative(_)) => unreachable!(), // recursive vocative?
            Some(Sentence::Junk(_)) => unreachable!(),
            None => Sentence::Vocative(VocativeSentence {
                target,
                command: None,
            }),
        });

    let terminator = sentence_end.clone().ignored().or(end());

    let full_sentence = normal_sentence_checked
        .then_ignore(terminator.clone())
        .or(vocative_sentence.then_ignore(terminator));

    // Fallback Recovery
    let non_terminator = filter(|t| {
        matches!(
            t,
            Token::Word(_) | Token::ProperNoun(_) | Token::Punctuation(',')
        )
    });

    // 1. Consume tokens until punctuation (and consume the punctuation).
    // Allows 0 tokens before punctuation (handles lone dots).
    let junk_with_punct = non_terminator
        .clone()
        .repeated()
        .then_ignore(sentence_end.clone().ignored());

    // 2. Consume tokens until EOF.
    // Must consume at least 1 token to avoid infinite loop at EOF.
    let junk_at_eof = non_terminator
        .clone()
        .repeated()
        .at_least(1)
        .then_ignore(end());

    let junk_sentence = junk_with_punct.or(junk_at_eof).map(|tokens: Vec<Token>| {
        let content = tokens
            .iter()
            .map(|t| t.to_string())
            .collect::<Vec<_>>()
            .join(" ");
        Sentence::Junk(content)
    });

    full_sentence
        .or(junk_sentence)
        .repeated()
        .map(|sentences| Program { sentences })
}

pub fn phrase_parser() -> impl Parser<Token, Phrase, Error = Simple<Token>> + Clone {
    recursive(|phrase| {
        let pi_phrase = just(Token::Word(Word::Pi))
            .ignore_then(phrase.clone())
            .map(Modifier::PiPhrase);
        let modifier_word = select! {
            Token::Word(w) if !w.is_particle() || w == Word::Ala => w,
        }
        .map(Modifier::Word);
        let modifier_proper = select! { Token::ProperNoun(s) => s }.map(Modifier::ProperNoun);
        let modifier = pi_phrase.or(modifier_word).or(modifier_proper);

        let head_word = select! { Token::Word(w) if !w.is_particle() => PhraseHead::Word(w) };
        let head_proper = select! { Token::ProperNoun(s) => PhraseHead::ProperNoun(s) };
        let head = head_word.or(head_proper);

        head.then(modifier.repeated())
            .map(|(head, modifiers)| Phrase { head, modifiers })
    })
}

fn process_head(mut phrase: Phrase) -> (Phrase, Vec<PrepositionalPhrase>) {
    let mut extracted_pps = Vec::new();
    let mut current_modifiers = Vec::new();
    let mut pending_modifiers = phrase.modifiers.into_iter();

    while let Some(modifier) = pending_modifiers.next() {
        let is_prep = match &modifier {
            Modifier::Word(w) => w.is_preposition(),
            _ => false,
        };
        if is_prep {
            let mut remaining: Vec<Modifier> = pending_modifiers.collect();
            if remaining.is_empty() {
                current_modifiers.push(modifier);
                break;
            } else {
                let prep_word = match modifier {
                    Modifier::Word(w) => w,
                    _ => unreachable!(),
                };
                let first = remaining.remove(0);
                if let Modifier::Word(head_word) = first {
                    let object_phrase = Phrase {
                        head: PhraseHead::Word(head_word),
                        modifiers: remaining,
                    };
                    let (cleaned_object, sub_pps) = process_head(object_phrase);
                    extracted_pps.push(PrepositionalPhrase {
                        preposition: prep_word,
                        object: cleaned_object,
                    });
                    extracted_pps.extend(sub_pps);
                    break;
                } else {
                    current_modifiers.push(Modifier::Word(prep_word));
                    current_modifiers.push(first);
                    pending_modifiers = remaining.into_iter();
                }
            }
        } else {
            current_modifiers.push(modifier);
        }
    }
    phrase.modifiers = current_modifiers;
    (phrase, extracted_pps)
}

fn is_x_ala_x(sentence: &NormalSentence) -> bool {
    let check_phrase = |phrase: &Phrase| {
        let head_word = match &phrase.head {
            PhraseHead::Word(w) => *w,
            _ => return false,
        };
        if phrase.modifiers.len() >= 2 {
            if let (Modifier::Word(w1), Modifier::Word(w2)) =
                (&phrase.modifiers[0], &phrase.modifiers[1])
            {
                if *w1 == Word::Ala && *w2 == head_word {
                    return true;
                }
            }
        }
        false
    };

    match &sentence.head {
        Head::SubjectPredicate { predicates, .. } => {
            predicates.iter().any(|p| check_phrase(&p.head))
        }
        Head::Optative { predicates, .. } => predicates.iter().any(|p| check_phrase(&p.head)),
        Head::PredicateOnly(predicates) => predicates.iter().any(|p| check_phrase(&p.head)),
        Head::Phrase(p) => check_phrase(p),
    }
}

fn contains_seme(sentence: &NormalSentence) -> bool {
    // Check context for "seme"
    if let Some(ctx) = &sentence.context {
        if ctx.parts.iter().any(|part| match part {
            ContextPart::Phrase(p) => phrase_has_seme(p),
            _ => false,
        }) {
            return true;
        }
    }

    // Check head
    match &sentence.head {
        Head::SubjectPredicate {
            subject,
            predicates,
        } => {
            let subject_has = match subject {
                Subject::Composite(phrases) => phrases.iter().any(phrase_has_seme),
                _ => false,
            };
            if subject_has {
                return true;
            }
            predicates.iter().any(predicate_has_seme)
        }
        Head::Optative { predicates, .. } => predicates.iter().any(predicate_has_seme),
        Head::PredicateOnly(predicates) => predicates.iter().any(predicate_has_seme),
        Head::Phrase(p) => phrase_has_seme(p),
    }
}

fn phrase_has_seme(phrase: &Phrase) -> bool {
    if let PhraseHead::Word(w) = phrase.head {
        if w == Word::Seme {
            return true;
        }
    }
    for modi in &phrase.modifiers {
        match modi {
            Modifier::Word(w) => {
                if *w == Word::Seme {
                    return true;
                }
            }
            Modifier::PiPhrase(p) => {
                if phrase_has_seme(p) {
                    return true;
                }
            }
            _ => {}
        }
    }
    false
}

fn predicate_has_seme(pred: &Predicate) -> bool {
    if phrase_has_seme(&pred.head) {
        return true;
    }
    if pred.direct_objects.iter().any(phrase_has_seme) {
        return true;
    }
    if pred
        .prepositions
        .iter()
        .any(|pp| pp.preposition == Word::Seme || phrase_has_seme(&pp.object))
    {
        return true;
    }
    false
}

fn contains_tan_seme(sentence: &NormalSentence) -> bool {
    // Check context for "tan seme"
    if let Some(ctx) = &sentence.context {
        if ctx.parts.iter().any(|part| match part {
            ContextPart::Phrase(p) => is_specific_phrase(p, Word::Tan, Word::Seme),
            _ => false,
        }) {
            return true;
        }
    }

    // Check prepositions for "tan seme"
    let check_preds = |preds: &[Predicate]| {
        preds.iter().any(|pred| {
            pred.prepositions.iter().any(|pp| {
                let object_is_seme = match &pp.object.head {
                    PhraseHead::Word(w) => *w == Word::Seme,
                    _ => false,
                };
                pp.preposition == Word::Tan && object_is_seme
            })
        })
    };

    match &sentence.head {
        Head::SubjectPredicate { predicates, .. } => check_preds(predicates),
        Head::PredicateOnly(preds) => preds.iter().any(|p| {
            p.prepositions.iter().any(|pp| {
                pp.preposition == Word::Tan && pp.object.head == PhraseHead::Word(Word::Seme)
            })
        }),
        Head::Optative { predicates, .. } => predicates.iter().any(|p| {
            p.prepositions.iter().any(|pp| {
                pp.preposition == Word::Tan && pp.object.head == PhraseHead::Word(Word::Seme)
            })
        }),
        Head::Phrase(p) => is_specific_phrase(p, Word::Tan, Word::Seme),
    }
}

fn contains_nasin_seme(sentence: &NormalSentence) -> bool {
    // Check context for "nasin seme"
    if let Some(ctx) = &sentence.context {
        if ctx.parts.iter().any(|part| match part {
            ContextPart::Phrase(p) => is_specific_phrase(p, Word::Nasin, Word::Seme),
            _ => false,
        }) {
            return true;
        }
    }
    false
}

fn is_specific_phrase(phrase: &Phrase, head: Word, modifier: Word) -> bool {
    match &phrase.head {
        PhraseHead::Word(w) => {
            if *w != head {
                return false;
            }
        }
        _ => return false,
    }

    if phrase.modifiers.len() >= 1 {
        if let Modifier::Word(w) = &phrase.modifiers[0] {
            return *w == modifier;
        }
    }
    false
}

#[cfg(test)]
mod tests {
    use super::*;

    fn parse(input: &str) -> Program {
        let le = lexer();
        let tokens = le.parse(input).unwrap();
        let pa = parser();
        pa.parse(tokens).unwrap()
    }

    #[test]
    fn test_basic_sentences() {
        let p = parse("mi moku.");
        assert_eq!(p.sentences.len(), 1);
    }

    #[test]
    fn test_fallback() {
        let p = parse("mi li moku. mi moku.");
        assert_eq!(p.sentences.len(), 2);
    }

    #[test]
    fn test_fallback_lone_punct() {
        // Lone dot at start should be eaten as junk.
        let p = parse(". mi moku.");
        assert_eq!(p.sentences.len(), 2); // 1 junk, 1 normal
    }
}

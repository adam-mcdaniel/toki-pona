use crate::word::Word;

#[derive(Debug, Clone, PartialEq)]
pub struct Program {
    pub sentences: Vec<Sentence>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum Sentence {
    Normal(NormalSentence),
    // Questions, commands, etc. can often be represented as normal sentences in structure,
    // but semantically different.
    Vocative(VocativeSentence),
    Question(QuestionSentence),
    Junk(String),
}

#[derive(Debug, Clone, PartialEq)]
pub struct QuestionSentence {
    pub sentence: NormalSentence, // The base sentence structure
    pub method: QuestionMethod,
}

#[derive(Debug, Clone, PartialEq)]
pub enum QuestionMethod {
    Seme(Vec<Word>), // Words replaced by 'seme' (for future semantic analysis, currently just tracking existence)
    AnuSeme,         // ends with "anu seme"
    VerbAlaVerb,     // "pona ala pona"
    Why,             // "tan seme"
    How,             // "nasin seme"
}

#[derive(Debug, Clone, PartialEq)]
pub struct NormalSentence {
    pub context: Option<Context>,
    pub head: Head,
}

#[derive(Debug, Clone, PartialEq)]
pub struct VocativeSentence {
    pub target: Phrase,
    pub command: Option<NormalSentence>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct Context {
    pub parts: Vec<ContextPart>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum ContextPart {
    Phrase(Phrase),
    Sentence(Box<NormalSentence>),
} // ... la

#[derive(Debug, Clone, PartialEq)]
pub enum Head {
    // "mi moku" -> Subject::Mi, Predicate(...)
    // "sina moku" -> Subject::Sina, Predicate(...)
    // "ona li moku" -> Subject::Other(...), Predicate(...)
    SubjectPredicate {
        subject: Subject,
        predicates: Vec<Predicate>,
    },
    Optative {
        subject: Subject,
        predicates: Vec<Predicate>,
    },
    PredicateOnly(Vec<Predicate>), // imperative / vocative
    Phrase(Phrase),                // Fragment / Title
}

#[derive(Debug, Clone, PartialEq)]
pub enum Subject {
    Mi,
    Sina,
    Composite(Vec<Phrase>), // one or more phrases, always requires 'li' (unless it's just one phrase and matches Mi/Sina logic, which we handle in parser)
}

#[derive(Debug, Clone, PartialEq)]
pub struct Predicate {
    pub head: Phrase,                           // The verb/adjective
    pub direct_objects: Vec<Phrase>,            // e ni e ni
    pub prepositions: Vec<PrepositionalPhrase>, // lon ma
}

#[derive(Debug, Clone, PartialEq)]
pub struct PrepositionalPhrase {
    pub preposition: Word,
    pub object: Phrase,
}

#[derive(Debug, Clone, PartialEq)]
pub struct Phrase {
    pub head: PhraseHead,
    pub modifiers: Vec<Modifier>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum PhraseHead {
    Word(Word),
    ProperNoun(String),
}

#[derive(Debug, Clone, PartialEq)]
pub enum Modifier {
    Word(Word),
    ProperNoun(String),
    PiPhrase(Phrase), // pi ...
}

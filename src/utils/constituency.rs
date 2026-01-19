use super::PosTag;
use crate::ast::*;

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum NodeKind {
    Utterance,
    Sentence,
    Context,
    MainClause,
    Subject,
    Predicate,
    PredicateCore,
    Preverb,
    PreverbPhrase,
    Phrase,
    PrepositionalPhrase,
    Modifier,
    Vocative,
    Interjection,
    Particle, // li, e, la, pi, grammar particles
    Word,     // Leaf node with text
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct ConstituencyNode {
    pub kind: NodeKind,
    pub children: Vec<ConstituencyNode>,
    pub tag: Option<PosTag>,
    pub token: Option<String>,
}

impl ConstituencyNode {
    pub fn new(kind: NodeKind, children: Vec<ConstituencyNode>) -> Self {
        Self {
            kind,
            children,
            tag: None,
            token: None,
        }
    }

    pub fn leaf(token: String, tag: PosTag) -> Self {
        Self {
            kind: NodeKind::Word,
            children: vec![],
            tag: Some(tag),
            token: Some(token),
        }
    }

    pub fn particle(token: String) -> Self {
        Self {
            kind: NodeKind::Particle,
            children: vec![],
            tag: Some(PosTag::Particle),
            token: Some(token),
        }
    }
}

pub fn build_tree(text: &Text) -> Vec<ConstituencyNode> {
    text.utterances().map(process_utterance).collect()
}

fn process_utterance(u: &Utterance) -> ConstituencyNode {
    match u {
        Utterance::Sentence(block) => {
            let children = process_sentence_block(block);
            ConstituencyNode::new(
                NodeKind::Utterance,
                vec![ConstituencyNode::new(NodeKind::Sentence, children)],
            )
        }
        Utterance::Vocative(cmd) => {
            let children = process_vocative(cmd);
            ConstituencyNode::new(
                NodeKind::Utterance,
                vec![ConstituencyNode::new(NodeKind::Vocative, children)],
            )
        }
        Utterance::Interjection(int) => {
            let children = process_interjection(int);
            ConstituencyNode::new(
                NodeKind::Utterance,
                vec![ConstituencyNode::new(NodeKind::Interjection, children)],
            )
        }
    }
}

fn process_sentence_block(block: &SentenceBlock) -> Vec<ConstituencyNode> {
    let mut children = Vec::new();
    if let Some(conj) = &block.conjunction {
        children.push(ConstituencyNode::particle(conj.clone()));
    }
    for context in &block.contexts {
        children.push(process_context(context));
        children.push(ConstituencyNode::particle("la".to_string()));
    }
    children.push(process_main_clause(&block.main_clause));
    children
}

fn process_context(context: &Context) -> ConstituencyNode {
    let children = match context {
        Context::Sentence(block) => process_sentence_block(block),
        Context::Prepositional(pp) => vec![process_prepositional_phrase(pp)],
        Context::Phrase(p) => vec![process_phrase(p, PosTag::Noun)],
    };
    ConstituencyNode::new(NodeKind::Context, children)
}

fn process_main_clause(clause: &MainClause) -> ConstituencyNode {
    let children = match clause {
        MainClause::Simple { subject, predicate } => {
            vec![
                process_subject_simple(subject),
                process_predicate_unmarked(predicate),
            ]
        }
        MainClause::General { subject, predicate } => {
            vec![
                process_subject_general(subject),
                process_predicate_marked(predicate),
            ]
        }
    };
    ConstituencyNode::new(NodeKind::MainClause, children)
}

fn process_subject_simple(subj: &SubjectSimple) -> ConstituencyNode {
    let w = match subj {
        SubjectSimple::Mi => "mi",
        SubjectSimple::Sina => "sina",
    };
    ConstituencyNode::new(
        NodeKind::Subject,
        vec![ConstituencyNode::leaf(w.to_string(), PosTag::Pronoun)],
    )
}

fn process_subject_general(subj: &SubjectGeneral) -> ConstituencyNode {
    let mut children = vec![process_phrase(&subj.head, PosTag::Noun)];
    for (conj, phrase) in &subj.tail {
        let w = match conj {
            ConjunctionSubject::En => "en",
            ConjunctionSubject::Anu => "anu",
        };
        children.push(ConstituencyNode::particle(w.to_string()));
        children.push(process_phrase(phrase, PosTag::Noun));
    }
    ConstituencyNode::new(NodeKind::Subject, children)
}

fn process_predicate_unmarked(pred: &PredicateUnmarked) -> ConstituencyNode {
    ConstituencyNode::new(
        NodeKind::Predicate,
        process_predicate_core(&pred.0).children,
    )
}

fn process_predicate_marked(pred: &PredicateMarked) -> ConstituencyNode {
    let mut children = Vec::new();
    for (marker, core) in &pred.0 {
        let w = match marker {
            PredicateMarker::Li => "li",
            PredicateMarker::O => "o",
        };
        children.push(ConstituencyNode::particle(w.to_string()));
        children.push(process_predicate_core(core));
    }
    ConstituencyNode::new(NodeKind::Predicate, children)
}

fn process_predicate_core(core: &PredicateCore) -> ConstituencyNode {
    let mut children = Vec::new();
    for preverb in &core.preverbs {
        children.push(process_preverb_phrase(preverb));
    }

    match &core.head {
        HeadPredicate::Phrase(p) => children.push(process_phrase(p, PosTag::Verb)),
        HeadPredicate::Prepositional(pp) => children.push(process_prepositional_phrase(pp)),
    }

    for obj in &core.direct_objects {
        children.push(ConstituencyNode::particle("e".to_string()));
        children.push(process_phrase(obj, PosTag::Noun));
    }

    for pp in &core.prepositional_phrases {
        children.push(process_prepositional_phrase(pp));
    }

    ConstituencyNode::new(NodeKind::PredicateCore, children)
}

fn process_preverb_phrase(pv: &PreverbPhrase) -> ConstituencyNode {
    let w = match pv.preverb {
        Preverb::Wile => "wile",
        Preverb::Sona => "sona",
        Preverb::Awen => "awen",
        Preverb::Kama => "kama",
        Preverb::Ken => "ken",
        Preverb::Lukin => "lukin",
    };
    let mut children = vec![ConstituencyNode::leaf(w.to_string(), PosTag::Preverb)];
    if pv.ala {
        // treating negation of preverb as a modifier to it in the tree
        children.push(ConstituencyNode::leaf("ala".to_string(), PosTag::Modifier));
    }
    // Just wrap in a phrase node genericly or just list nodes?
    // Using Phrase kind for now to denote grouping
    ConstituencyNode::new(NodeKind::PreverbPhrase, children)
}

fn process_prepositional_phrase(pp: &PrepositionalPhrase) -> ConstituencyNode {
    let w = match pp.preposition {
        Preposition::Lon => "lon",
        Preposition::Tawa => "tawa",
        Preposition::Tan => "tan",
        Preposition::Sama => "sama",
        Preposition::Kepeken => "kepeken",
    };
    let mut children = vec![ConstituencyNode::leaf(w.to_string(), PosTag::Preposition)];
    if pp.ala {
        children.push(ConstituencyNode::leaf("ala".to_string(), PosTag::Modifier));
    }
    children.push(process_phrase(&pp.object, PosTag::Noun));
    ConstituencyNode::new(NodeKind::PrepositionalPhrase, children)
}

fn process_phrase(phrase: &Phrase, head_tag: PosTag) -> ConstituencyNode {
    let mut children = vec![process_word(&phrase.head, head_tag)];
    for modifier in &phrase.modifiers {
        children.push(process_modifier(modifier));
    }
    ConstituencyNode::new(NodeKind::Phrase, children)
}

fn process_modifier(modifier: &Modifier) -> ConstituencyNode {
    match modifier {
        Modifier::Word(w) => process_word(w, PosTag::Modifier),
        Modifier::Pi(p) => {
            let mut children = vec![ConstituencyNode::particle("pi".to_string())];
            children.push(process_phrase(p, PosTag::Modifier));
            ConstituencyNode::new(NodeKind::Modifier, children)
        }
        Modifier::Anu(p) => {
            let mut children = vec![ConstituencyNode::particle("anu".to_string())];
            children.push(process_phrase(p, PosTag::Modifier));
            ConstituencyNode::new(NodeKind::Modifier, children)
        }
        Modifier::Nanpa(n) => {
            let mut children = vec![ConstituencyNode::particle("nanpa".to_string())];
            for w in &n.0 {
                children.push(process_word(w, PosTag::Modifier));
            }
            ConstituencyNode::new(NodeKind::Modifier, children)
        }
        Modifier::Special(s) => ConstituencyNode::leaf(s.clone(), PosTag::Modifier),
        Modifier::ProperNoun(s) => ConstituencyNode::leaf(s.clone(), PosTag::ProperNoun),
    }
}

fn process_word(word: &Word, tag: PosTag) -> ConstituencyNode {
    match word {
        Word::Content(s) => ConstituencyNode::leaf(s.clone(), tag),
        Word::Pronoun(p) => {
            let w = match p {
                Pronoun::Mi => "mi",
                Pronoun::Sina => "sina",
                Pronoun::Ona => "ona",
                Pronoun::Ni => "ni",
            };
            ConstituencyNode::leaf(w.to_string(), PosTag::Pronoun)
        }
        Word::Question(s) => ConstituencyNode::leaf(s.clone(), PosTag::Other),
    }
}

fn process_vocative(cmd: &VocativeCommand) -> Vec<ConstituencyNode> {
    let mut children = Vec::new();
    if let Some(target) = &cmd.target {
        children.push(process_phrase(target, PosTag::Noun));
    }
    children.push(ConstituencyNode::particle("o".to_string()));
    if let Some(pred) = &cmd.predicate {
        children.push(process_predicate_core(pred));
    }
    children
}

fn process_interjection(int: &Interjection) -> Vec<ConstituencyNode> {
    let mut children = Vec::new();
    match int {
        Interjection::Phrase { phrase, a } => {
            children.push(process_phrase(phrase, PosTag::Other));
            if *a {
                children.push(ConstituencyNode::particle("a".to_string()));
            }
        }
        Interjection::A => children.push(ConstituencyNode::particle("a".to_string())),
    }
    children
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_tree_construction() {
        let text = Text::new("tenpo la toki li lon.");
        let tree = build_tree(&text);
        println!("Tree: {:#?}", tree);
        // Root is Utterance
        assert_eq!(tree.len(), 1);
        let root = &tree[0];
        assert_eq!(root.kind, NodeKind::Utterance);

        // Child is Sentence
        assert_eq!(root.children.len(), 1);
        let sentence = &root.children[0];
        assert_eq!(sentence.kind, NodeKind::Sentence);

        // Children: Context, Particle(la), MainClause
        assert_eq!(sentence.children.len(), 3);
        assert_eq!(sentence.children[0].kind, NodeKind::Context);
        assert_eq!(sentence.children[1].kind, NodeKind::Particle);
        assert_eq!(sentence.children[1].token.as_deref(), Some("la"));
        assert_eq!(sentence.children[2].kind, NodeKind::MainClause);
    }
}

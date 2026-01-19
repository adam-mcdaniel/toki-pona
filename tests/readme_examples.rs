use toki_pona::{Text, Utterance};

#[test]
fn readme_example1() {
    let text = Text::from("mi wile e ni: sina kama sona e toki pona!");
    println!("{:#?}", text);

    // Iterate over simple sentences, interjections, and vocatives.
    for (i, utterance) in text.utterances().enumerate() {
        println!("Utterance {}:", i);
        println!("{:#?}", utterance);

        match utterance {
            Utterance::Sentence(sentence) => {
                println!("La contexts: {:?}", sentence.contexts);
                println!("Main clause: {:#?}", sentence.main_clause);
            }
            Utterance::Vocative(invocation) => {
                println!("Vocative: {:#?}", invocation);
            }
            Utterance::Interjection(interjection) => {
                println!("Interjection: {:#?}", interjection);
            }
        }
    }

    // Iterate over spans of successfully parsed text
    for (i, span) in text.spans().enumerate() {
        println!("Span {}:", i);
        println!("{:#?}", span);
    }

    // Iterate over spans and utterances
    for (span, utterance) in text.parsed() {
        println!("Span: {:?} Utterance: {:#?}", span, utterance);
    }

    // Iterate over unsuccessfully parsed spans
    for (span, error) in text.errors() {
        println!("Span: {:?} Error: {:#?}", span, error);
    }
    // If there are no errors, print "No errors"
    if text.errors().is_empty() {
        println!("No errors");
    }

    // Show the parsing coverage
    println!("Coverage: {}%", text.coverage_ratio() * 100.0);
}

use toki_pona::NodeKind;

#[test]
fn readme_example2() {
    let text = Text::new("ona li mama ala mama?");
    let tree = text.constituents();
    println!("Tree: {:#?}", tree);
    // Root is Utterance
    assert_eq!(tree.len(), 1);
    let root = &tree[0];
    assert_eq!(root.kind, NodeKind::Utterance);

    // Child is Sentence
    assert_eq!(root.children.len(), 1);
    let sentence = &root.children[0];
    assert_eq!(sentence.kind, NodeKind::Sentence);

    // The sentence has no context clause (denoted with la),
    // so it only has the main clause
    let clause = &sentence.children[0];
    assert_eq!(clause.kind, NodeKind::MainClause);

    // The main clause has a subject and a predicate
    let subject = &clause.children[0];
    let predicate = &clause.children[1];
    assert_eq!(subject.kind, NodeKind::Subject);
    assert_eq!(predicate.kind, NodeKind::Predicate);

    // Print the subject and predicate
    println!("Subject: {:#?}", subject);
    println!("Predicate: {:#?}", predicate);
}

#[test]
fn readme_example3() {
    let text = Text::new("sina pali e ike la, ni li pona ala!");
    let tagged = text.tag();
    println!("Tagged: {:#?}", tagged);
}

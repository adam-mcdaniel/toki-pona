use crate::ast::*;

#[derive(Debug, Clone, PartialEq, Eq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum PosTag {
    Noun,
    Verb,
    Modifier,
    Preposition,
    Preverb,
    Particle,
    ProperNoun,
    Pronoun,
    // Catch-all or specific functional words
    Other,
}

#[derive(Debug, Clone, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct TaggedWord {
    pub word: String,
    pub tag: PosTag,
}

pub fn tag_text(text: &Text) -> Vec<TaggedWord> {
    let mut tags = Vec::new();
    for utterance in text.utterances() {
        tag_utterance(utterance, &mut tags);
    }
    tags
}

fn tag_utterance(utterance: &Utterance, tags: &mut Vec<TaggedWord>) {
    match utterance {
        Utterance::Sentence(block) => tag_sentence_block(block, tags),
        Utterance::Vocative(cmd) => tag_vocative(cmd, tags),
        Utterance::Interjection(int) => tag_interjection(int, tags),
    }
}

fn tag_sentence_block(block: &SentenceBlock, tags: &mut Vec<TaggedWord>) {
    for context in &block.contexts {
        tag_context(context, tags);
        tags.push(TaggedWord {
            word: "la".to_string(),
            tag: PosTag::Particle,
        });
    }
    tag_main_clause(&block.main_clause, tags);
}

fn tag_context(context: &Context, tags: &mut Vec<TaggedWord>) {
    match context {
        Context::Sentence(block) => tag_sentence_block(block, tags),
        Context::Prepositional(pp) => tag_prepositional_phrase(pp, tags),
        Context::Phrase(p) => tag_phrase(p, tags, PosTag::Noun), // Default head is Noun for context unless Prepositional
    }
}

fn tag_main_clause(clause: &MainClause, tags: &mut Vec<TaggedWord>) {
    match clause {
        MainClause::Simple { subject, predicate } => {
            tag_subject_simple(subject, tags);
            tag_predicate_unmarked(predicate, tags);
        }
        MainClause::General { subject, predicate } => {
            tag_subject_general(subject, tags);
            tag_predicate_marked(predicate, tags);
        }
    }
}

fn tag_subject_simple(subj: &SubjectSimple, tags: &mut Vec<TaggedWord>) {
    let w = match subj {
        SubjectSimple::Mi => "mi",
        SubjectSimple::Sina => "sina",
    };
    tags.push(TaggedWord {
        word: w.to_string(),
        tag: PosTag::Pronoun,
    });
}

fn tag_subject_general(subj: &SubjectGeneral, tags: &mut Vec<TaggedWord>) {
    tag_phrase(&subj.head, tags, PosTag::Noun);
    for (conj, phrase) in &subj.tail {
        let w = match conj {
            ConjunctionSubject::En => "en",
            ConjunctionSubject::Anu => "anu",
        };
        tags.push(TaggedWord {
            word: w.to_string(),
            tag: PosTag::Particle,
        });
        tag_phrase(phrase, tags, PosTag::Noun);
    }
}

fn tag_predicate_unmarked(pred: &PredicateUnmarked, tags: &mut Vec<TaggedWord>) {
    tag_predicate_core(&pred.0, tags);
}

fn tag_predicate_marked(pred: &PredicateMarked, tags: &mut Vec<TaggedWord>) {
    for (marker, core) in &pred.0 {
        let w = match marker {
            PredicateMarker::Li => "li",
            PredicateMarker::O => "o",
        };
        tags.push(TaggedWord {
            word: w.to_string(),
            tag: PosTag::Particle,
        });
        tag_predicate_core(core, tags);
    }
}

fn tag_predicate_core(core: &PredicateCore, tags: &mut Vec<TaggedWord>) {
    for preverb in &core.preverbs {
        tag_preverb_phrase(preverb, tags);
    }

    // Head of predicate. Usually Verb unless PP.
    match &core.head {
        HeadPredicate::Phrase(p) => tag_phrase(p, tags, PosTag::Verb),
        HeadPredicate::Prepositional(pp) => tag_prepositional_phrase(pp, tags),
    }

    for obj in &core.direct_objects {
        tags.push(TaggedWord {
            word: "e".to_string(),
            tag: PosTag::Particle,
        });
        tag_phrase(obj, tags, PosTag::Noun);
    }

    for pp in &core.prepositional_phrases {
        tag_prepositional_phrase(pp, tags);
    }
}

fn tag_preverb_phrase(pv: &PreverbPhrase, tags: &mut Vec<TaggedWord>) {
    let w = match pv.preverb {
        Preverb::Wile => "wile",
        Preverb::Sona => "sona",
        Preverb::Awen => "awen",
        Preverb::Kama => "kama",
        Preverb::Ken => "ken",
        Preverb::Lukin => "lukin",
    };
    tags.push(TaggedWord {
        word: w.to_string(),
        tag: PosTag::Preverb,
    });
    if pv.ala {
        tags.push(TaggedWord {
            word: "ala".to_string(),
            tag: PosTag::Modifier,
        }); // "ala" negating preverb is modifier-like
    }
}

fn tag_prepositional_phrase(pp: &PrepositionalPhrase, tags: &mut Vec<TaggedWord>) {
    let w = match pp.preposition {
        Preposition::Lon => "lon",
        Preposition::Tawa => "tawa",
        Preposition::Tan => "tan",
        Preposition::Sama => "sama",
        Preposition::Kepeken => "kepeken",
    };
    tags.push(TaggedWord {
        word: w.to_string(),
        tag: PosTag::Preposition,
    });
    if pp.ala {
        tags.push(TaggedWord {
            word: "ala".to_string(),
            tag: PosTag::Modifier,
        });
    }
    tag_phrase(&pp.object, tags, PosTag::Noun);
}

fn tag_phrase(phrase: &Phrase, tags: &mut Vec<TaggedWord>, head_tag: PosTag) {
    tag_word(&phrase.head, tags, head_tag);
    for modifier in &phrase.modifiers {
        tag_modifier(modifier, tags);
    }
}

fn tag_modifier(modifier: &Modifier, tags: &mut Vec<TaggedWord>) {
    match modifier {
        Modifier::Word(w) => tag_word(w, tags, PosTag::Modifier),
        Modifier::Pi(p) => {
            tags.push(TaggedWord {
                word: "pi".to_string(),
                tag: PosTag::Particle,
            });
            // Inside pi, head acts as Noun/Modifier head? Usually treated as Modifier phrase
            tag_phrase(p, tags, PosTag::Modifier);
        }
        Modifier::Anu(p) => {
            tags.push(TaggedWord {
                word: "anu".to_string(),
                tag: PosTag::Particle,
            });
            tag_phrase(p, tags, PosTag::Modifier);
        }
        Modifier::Nanpa(n) => {
            tags.push(TaggedWord {
                word: "nanpa".to_string(),
                tag: PosTag::Particle,
            }); // or Ordinal marker?
            for w in &n.0 {
                tag_word(w, tags, PosTag::Modifier); // numbers are modifiers
            }
        }
        Modifier::Special(s) => tags.push(TaggedWord {
            word: s.clone(),
            tag: PosTag::Modifier,
        }),
        Modifier::ProperNoun(s) => tags.push(TaggedWord {
            word: s.clone(),
            tag: PosTag::ProperNoun,
        }),
    }
}

fn tag_word(word: &Word, tags: &mut Vec<TaggedWord>, assigned_tag: PosTag) {
    match word {
        Word::Content(s) => tags.push(TaggedWord {
            word: s.clone(),
            tag: assigned_tag,
        }),
        Word::Pronoun(p) => {
            let w = match p {
                Pronoun::Mi => "mi",
                Pronoun::Sina => "sina",
                Pronoun::Ona => "ona",
                Pronoun::Ni => "ni",
            };
            tags.push(TaggedWord {
                word: w.to_string(),
                tag: PosTag::Pronoun,
            });
        }
        Word::Question(s) => tags.push(TaggedWord {
            word: s.clone(),
            tag: PosTag::Other,
        }), // seme
    }
}

fn tag_vocative(cmd: &VocativeCommand, tags: &mut Vec<TaggedWord>) {
    if let Some(target) = &cmd.target {
        tag_phrase(target, tags, PosTag::Noun); // Target is treated as Noun
    }
    tags.push(TaggedWord {
        word: "o".to_string(),
        tag: PosTag::Particle,
    });
    if let Some(pred) = &cmd.predicate {
        tag_predicate_core(pred, tags);
    }
}

fn tag_interjection(int: &Interjection, tags: &mut Vec<TaggedWord>) {
    match int {
        Interjection::Phrase { phrase, a } => {
            tag_phrase(phrase, tags, PosTag::Other); // Interjection phrase head is generic
            if *a {
                tags.push(TaggedWord {
                    word: "a".to_string(),
                    tag: PosTag::Particle,
                });
            }
        }
        Interjection::A => tags.push(TaggedWord {
            word: "a".to_string(),
            tag: PosTag::Particle,
        }),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_tagging() {
        // "tenpo open la toki li lon."
        let text = Text::new("tenpo open la, toki li lon.");
        let tags = tag_text(&text);

        // tenpo: Noun (Context head)
        // open: Modifier
        // la: Particle
        // toki: Noun (Subject head)
        // li: Particle
        // lon: Verb (Predicate head)

        let expected = vec![
            (PosTag::Noun, "tenpo"),
            (PosTag::Modifier, "open"),
            (PosTag::Particle, "la"),
            (PosTag::Noun, "toki"),
            (PosTag::Particle, "li"),
            (PosTag::Verb, "lon"),
        ];

        for (i, (tag, word)) in expected.into_iter().enumerate() {
            assert_eq!(
                tags[i].tag, tag,
                "Mismatch at index {} for word {}",
                i, word
            );
            assert_eq!(tags[i].word, word);
        }
    }
}

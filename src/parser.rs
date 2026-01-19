use crate::ast::*;
use nom::{
    IResult, Parser,
    branch::alt,
    bytes::complete::{tag, take_while, take_while1},
    character::complete::{alpha1, multispace0, one_of},
    combinator::{cut, map, opt, peek, recognize},
    multi::{many0, many1},
    sequence::{delimited, pair, preceded, terminated, tuple},
};

// --------------------------------------------------------------------------
// Whitespace and Basic Tokens
// --------------------------------------------------------------------------

fn lexeme<'a, F, O, E>(inner: F) -> impl FnMut(&'a str) -> IResult<&'a str, O, E>
where
    F: Parser<&'a str, O, E>,
    E: nom::error::ParseError<&'a str>,
{
    terminated(inner, multispace0)
}

fn match_tag<'a>(
    t: &'a str,
) -> impl FnMut(&'a str) -> IResult<&'a str, &'a str, nom::error::Error<&'a str>> {
    lexeme(tag(t))
}

// --------------------------------------------------------------------------
// Lexicon Lists
// --------------------------------------------------------------------------

const PREPOSITIONS: &[&str] = &["lon", "tawa", "tan", "sama", "kepeken"];
const PREVERBS: &[&str] = &["wile", "sona", "awen", "kama", "ken", "lukin"];
const PRONOUNS: &[&str] = &["mi", "sina", "ona", "ni"];
const CONTENT_WORDS: &[&str] = &[
    "akesi", "ala", "alasa", "ale", "ali", "anpa", "ante", "esun", "ijo", "ike", "ilo", "insa",
    "jaki", "jan", "jelo", "jo", "kala", "kalama", "kasi", "kili", "kiwen", "ko", "kon", "kule",
    "kulupu", "kute", "lape", "laso", "lawa", "len", "lete", "lili", "linja", "lipu", "loje",
    "luka", "lupa", "ma", "mama", "mani", "meli", "mije", "moku", "moli", "monsi", "mu", "mun",
    "musi", "mute", "nasa", "nasin", "nena", "nimi", "noka", "oko", "olin", "open", "pakala",
    "pali", "palisa", "pan", "pana", "pijalo", "pilin", "pimeja", "pini", "poka", "poki", "pona",
    "pu", "seli", "selo", "sewi", "sijelo", "sike", "sin", "sinpin", "sitelen", "soweli", "suli",
    "suno", "supa", "suwi", "taso", "telo", "tenpo", "toki", "tomo", "tonsi", "tu", "unpa", "uta",
    "utala", "walo", "wan", "waso", "weka",
];

// --------------------------------------------------------------------------
// Parsers
// --------------------------------------------------------------------------

pub fn parse_utterance(input: &str) -> IResult<&str, Utterance> {
    delimited(
        multispace0,
        alt((
            map(parse_sentence_block, Utterance::Sentence),
            map(parse_vocative_command, Utterance::Vocative),
            map(parse_interjection, Utterance::Interjection),
        )),
        delimited(multispace0, many0(one_of(".!,?:")), multispace0),
    )(input)
}

// 1. Sentence Structure

fn parse_sentence_block(input: &str) -> IResult<&str, SentenceBlock> {
    let (input, contexts) = many0(terminated(
        parse_context,
        terminated(match_tag("la"), opt(lexeme(one_of(",:")))),
    ))(input)?;

    // If we have contexts, we assume it's a sentence block.
    let (input, main_clause) = if !contexts.is_empty() {
        cut(parse_main_clause)(input)?
    } else {
        parse_main_clause(input)?
    };

    Ok((
        input,
        SentenceBlock {
            contexts,
            main_clause,
        },
    ))
}

fn parse_context(input: &str) -> IResult<&str, Context> {
    // Avoid left recursion and ambiguous prefixes.
    // Try to parse SentenceBlock first (checking if it is surrounded by `la` effectively in the parent loop).
    // But `parse_sentence_block` consumes eagerly.
    // As discussed, ambiguities exist. We try specialized first.
    // A sentence block inside a context is "S la".
    // If we parse SentenceBlock, it will consume "Subj Pred ...".
    // "mi moku" is SentenceBlock.
    // "mi moku" is also Phrase (mi modified by moku).
    // The parser order in `alt` matters.
    // If we put `parse_sentence_block` first, it might consume "mi moku" as a sentence.
    // If the input is "mi moku la", and we parse "mi moku" as Sentence, we get Context::Sentence.
    // If we parsed it as Phrase, we get Context::Phrase.
    // Which is correct?
    // "mi moku la" -> "If I eat". This is a clause (Sentence).
    // "mi moku la" -> "My food ...". This is a Phrase.
    // Context is ambiguous without broader semantic or detailed syntactic lookahead.
    // However, BNF line 11 says `context ::= <sentence-block> | <prepositional-phrase> | <phrase>`.
    // It lists sentence-block first.
    // But `parse_sentence_block` is expensive and recursive.
    // Note: `parse_sentence_block` calls `parse_context`. Infinite recursion if we are not careful.
    // `parse_sentence_block` -> `many0(context "la")` -> `context` -> `sentence_block`.
    // Loop!
    // Breaking recursion:
    // This recursion allows nested contexts: "(A la B) la C".
    // BNF: <sentence-block> ::= { <context> "la" } <main-clause>
    // If we are parsing a Context, and we choose SentenceBlock, we expect `{ context la } clause`.
    // If we have "A la B la C",
    // Top level: contexts=[A, B], main=C?
    // Or Context=A (Sentence: B la C? No, B la C is a sentence block).
    // If "A la B" is a sentence block (A=context, B=main).
    // Then "(A la B) la C".
    // So "A la B" is a context.
    // This implies `parse_sentence_block` consumes "A la B".
    // "A la" is consumed by `many0` in `parse_sentence_block`.
    // So `parse_sentence_block("A la B")`:
    //   context("A") -> parse_phrase("A").
    //   "la" matched.
    //   main("B").
    //   Returns SentenceBlock(contexts=[A], main=B).
    // Now back to "((A la B) la C)".
    // Parent `parse_sentence_block`:
    //   Starts parsing context.
    //   Tries `parse_sentence_block`.
    //   It sees "A la B la C".
    //   It parses "A la B" as a SentenceBlock (as above).
    //   It expects "la" after it.
    //   So "A la B la C" -> Context(Sentence(A la B)) "la" Main(C).
    //   This works.

    // To implement this, `parse_sentence_block` inside `parse_context` works IF strict ordering and limited depth?
    // No, `parse_sentence_block` will mistakenly look for `context la`.
    // If input is just "A la B", and we call `parse_sentence_block("A la B")`. It works.
    // If input is "A", and we call `parse_sentence_block("A")`.
    //   context -> ... matches phrase "A"? No "la" after it.
    //   main -> matches phrase "A".
    //   Returns SentenceBlock([], main=A).
    //   Then parent `parse_context` checks for `la`? No `parse_context` is just the variant.
    //   The parent `parse_sentence_block` checks `terminated(context, "la")`.
    //   So if we define "A" as a SentenceBlock, we consume "A".
    //   Then we look for "la".
    //   If "A la ..." -> We found a context.
    //   So "A" is a sentence block context.
    //   But "A" is also a Phrase context.
    //   If `alt` tries SentenceBlock first, it succeeds.
    //   So "A la B" -> Context(SentenceBlock(A)) "la" Main(B).
    //   Visually "A" is just phrase. Wrapping it in SentenceBlock(contexts=[], main=A) is valid but verbose.
    //   But standard parsing prefers the simplest parse?
    //   The BNF order suggests SentenceBlock.
    //   However, to avoid infinite recursion stack overflow during parsing:
    //   `parse_sentence_block` calls `parse_context`. `parse_context` calls `parse_sentence_block`.
    //   We need to ensure progress.
    //   `parse_sentence_block` demands `many0(context la)`.
    //   If `parse_sentence_block` returns a block with NO contexts (just main clause), it effectively reduces to MainClause.
    //   So `Context::Sentence` covering `MainClause` covering `Phrase` is ambiguous with `Context::Phrase`.
    //   If we only allow `SentenceBlock` as context IF it has at least one child context?
    //   Or just accept the recursion and ambiguity.
    //   Nom `alt` is first-match.
    //   If `parse_sentence_block` matches logic for `Phrase`, it returns `SentenceBlock`.
    //   So `Context::Sentence` is returned.
    //   This means almost everything becomes `Context::Sentence` unless we differentiate.
    //   Is there a case `run_command` doesn't match?
    //   Interjections/Vocatives are not in `MainClause`.
    //   So `parse_sentence_block` is strictly for things that form a clause.
    //   If I put `parse_sentence_block` first, I might never get `Context::Phrase`.
    //   Maybe `Context::Phrase` is for fragment answers? But `Context` is mostly "Condition la".
    //   "telo la" -> "Water, ..." (Context::Phrase).
    //   "mi moku la" -> "I eat, ..." (Context::Sentence).
    //   The difference is "mi moku" has Subject+Pred. "telo" is just Head.
    //   "telo" CAN be a MainClause ("Simple subject? No, General subject? Yes. but needs PredicateMarked").
    //   "telo li pona".
    //   "telo" alone is NOT a MainClause (unless imperative context "o"?).
    //   So `parse_sentence_block("telo")` fails because MainClause requires Subject+Predicate.
    //   So "telo" as context falls back to parse_phrase.
    //   "mi moku" as context: parse_sentence_block succeeds.
    //   So order: SentenceBlock, Prepositional, Phrase is correct.
    //   "telo" fails SB, matches Phrase.
    //   "mi moku" matches SB.
    //   This seems correct and robust.

    // BUT recursion cycle check:
    // parse_ctx -> parse_sb -> many0(parse_ctx ...).
    // parse_sb matches `main_clause` (which consumes tokens).
    // So it consumes tokens. It's not left-recursive (which consumes nothing before calling itself).
    // So it should terminate.

    // We use parse_main_clause instead of parse_sentence_block to avoid infinite recursion.
    // "A la B la C" is parsed as flat list of contexts.
    alt((
        map(parse_main_clause, |m| {
            Context::Sentence(Box::new(SentenceBlock {
                contexts: vec![],
                main_clause: m,
            }))
        }),
        map(parse_prepositional_phrase, Context::Prepositional),
        map(parse_phrase, Context::Phrase),
    ))(input)
}

fn parse_main_clause(input: &str) -> IResult<&str, MainClause> {
    alt((
        map(
            tuple((parse_subject_simple, parse_predicate_unmarked)),
            |(s, p)| MainClause::Simple {
                subject: s,
                predicate: p,
            },
        ),
        map(
            tuple((parse_subject_general, parse_predicate_marked)),
            |(s, p)| MainClause::General {
                subject: s,
                predicate: p,
            },
        ),
    ))(input)
}

// 2. Subjects

fn parse_subject_simple(input: &str) -> IResult<&str, SubjectSimple> {
    let (input, w) = lexeme(alpha1)(input)?;
    match w {
        "mi" => Ok((input, SubjectSimple::Mi)),
        "sina" => Ok((input, SubjectSimple::Sina)),
        _ => Err(nom::Err::Error(nom::error::Error::new(
            input,
            nom::error::ErrorKind::Tag,
        ))),
    }
}

fn parse_subject_general(input: &str) -> IResult<&str, SubjectGeneral> {
    let (input, head) = parse_phrase(input)?;
    let (input, tail) = many0(tuple((parse_conjunction_subject, parse_phrase)))(input)?;
    Ok((input, SubjectGeneral { head, tail }))
}

fn parse_conjunction_subject(input: &str) -> IResult<&str, ConjunctionSubject> {
    alt((
        map(match_tag("en"), |_| ConjunctionSubject::En),
        map(match_tag("anu"), |_| ConjunctionSubject::Anu),
    ))(input)
}

// 3. Predicates

fn parse_predicate_unmarked(input: &str) -> IResult<&str, PredicateUnmarked> {
    map(parse_predicate_core, PredicateUnmarked)(input)
}

fn parse_predicate_marker(input: &str) -> IResult<&str, PredicateMarker> {
    alt((
        map(match_tag("li"), |_| PredicateMarker::Li),
        map(match_tag("o"), |_| PredicateMarker::O),
    ))(input)
}

fn parse_predicate_marked(input: &str) -> IResult<&str, PredicateMarked> {
    // We need to differentiate markers to apply `cut`.
    // <predicate-marker> <predicate-core>
    let parser = |input| {
        let (input, marker) = parse_predicate_marker(input)?;
        match marker {
            PredicateMarker::Li => {
                let (input, core) = cut(parse_predicate_core)(input)?;
                Ok((input, (marker, core)))
            }
            PredicateMarker::O => {
                // DO NOT CUT "o" because "sina o" is also start of Vocative.
                // If parsing core fails, we might want to backtrack to Vocative.
                let (input, core) = parse_predicate_core(input)?;
                Ok((input, (marker, core)))
            }
        }
    };
    map(many1(parser), PredicateMarked)(input)
}

fn parse_predicate_core(input: &str) -> IResult<&str, PredicateCore> {
    let (input_after_preverbs, preverbs) = many0(parse_preverb_phrase)(input)?;

    // Try to parse head
    let head_res = parse_head_predicate(input_after_preverbs);

    if let Ok((rem, head)) = head_res {
        let (rem, direct_objects) = many0(parse_direct_object)(rem)?;
        let (rem, prepositional_phrases) = many0(parse_prepositional_phrase)(rem)?;
        Ok((
            rem,
            PredicateCore {
                preverbs,
                head,
                direct_objects,
                prepositional_phrases,
            },
        ))
    } else {
        // Head parsing failed.
        // If we have preverbs, maybe the last preverb is actually the head?
        // e.g. "mi sona e ni" -> "sona" is head, not preverb.
        if !preverbs.is_empty() {
            let mut preverbs = preverbs;
            let last = preverbs.pop().unwrap();

            // Convert last preverb to head phrase
            // Reconstruct logic: PreverbPhrase { preverb, ala } -> Phrase { head, modifiers }
            // We need to use input_after_preverbs as the start for DOs/PPs.

            let head_str = match last.preverb {
                Preverb::Wile => "wile",
                Preverb::Sona => "sona",
                Preverb::Awen => "awen",
                Preverb::Kama => "kama",
                Preverb::Ken => "ken",
                Preverb::Lukin => "lukin",
            };

            let mut modifiers = Vec::new();
            if last.ala {
                modifiers.push(Modifier::Word(Word::Content("ala".to_string())));
                // Note: 'ala' parsed as preverb modifier is separate.
                // "sona ala" -> "sona" is head, "ala" is modifier.
            }

            let head = HeadPredicate::Phrase(Phrase {
                head: Word::Content(head_str.to_string()),
                modifiers,
            });

            // Now continue parsing from input_after_preverbs (where head matches failed)
            let (rem, direct_objects) = many0(parse_direct_object)(input_after_preverbs)?;
            let (rem, prepositional_phrases) = many0(parse_prepositional_phrase)(rem)?;

            Ok((
                rem,
                PredicateCore {
                    preverbs,
                    head,
                    direct_objects,
                    prepositional_phrases,
                },
            ))
        } else {
            // No preverbs to fall back on, return the original error
            head_res.map(|_| unreachable!())
        }
    }
}

fn parse_head_predicate(input: &str) -> IResult<&str, HeadPredicate> {
    alt((
        map(parse_prepositional_phrase, HeadPredicate::Prepositional),
        map(parse_phrase, HeadPredicate::Phrase),
    ))(input)
}

fn parse_preverb_phrase(input: &str) -> IResult<&str, PreverbPhrase> {
    let (input, preverb) = parse_preverb(input)?;
    let (input, ala) = opt(match_tag("ala"))(input)?;
    Ok((
        input,
        PreverbPhrase {
            preverb,
            ala: ala.is_some(),
        },
    ))
}

fn parse_direct_object(input: &str) -> IResult<&str, Phrase> {
    preceded(match_tag("e"), cut(parse_phrase))(input)
}

// 4. Phrases & Modifiers

fn parse_phrase(input: &str) -> IResult<&str, Phrase> {
    let (input, head) = parse_word(input)?;
    let (input, modifiers) = many0(parse_modifier)(input)?;
    Ok((input, Phrase { head, modifiers }))
}

fn parse_modifier(input: &str) -> IResult<&str, Modifier> {
    alt((
        map(preceded(match_tag("pi"), cut(parse_phrase)), Modifier::Pi),
        map(preceded(match_tag("anu"), cut(parse_phrase)), Modifier::Anu),
        map(
            preceded(match_tag("nanpa"), cut(parse_number)),
            Modifier::Nanpa,
        ),
        parse_modifier_special,
        map(parse_proper_noun, Modifier::ProperNoun),
        map(parse_word, Modifier::Word),
    ))(input)
}

fn parse_modifier_special(input: &str) -> IResult<&str, Modifier> {
    let (input, s) = lexeme(alpha1)(input)?;
    if ["kin", "ala", "taso", "a"].contains(&s) {
        Ok((input, Modifier::Special(s.to_string())))
    } else {
        Err(nom::Err::Error(nom::error::Error::new(
            input,
            nom::error::ErrorKind::Tag,
        )))
    }
}

fn parse_number(input: &str) -> IResult<&str, Number> {
    map(many1(parse_word), Number)(input)
}

// 5. Prepositional Phrases

fn parse_prepositional_phrase(input: &str) -> IResult<&str, PrepositionalPhrase> {
    let (input, preposition) = parse_preposition(input)?;
    let (input, ala_opt) = opt(match_tag("ala"))(input)?;
    let (input, object) = parse_phrase(input)?;
    Ok((
        input,
        PrepositionalPhrase {
            preposition,
            ala: ala_opt.is_some(),
            object,
        },
    ))
}

// 6. Interjections & Commands

fn parse_vocative_command(input: &str) -> IResult<&str, VocativeCommand> {
    let (input, target) = opt(terminated(parse_phrase, match_tag("o")))(input)?;
    let (input, _) = if target.is_none() {
        match_tag("o")(input)?
    } else {
        (input, "o")
    };
    let (input, predicate) = opt(parse_predicate_core)(input)?;
    Ok((input, VocativeCommand { target, predicate }))
}

fn parse_interjection(input: &str) -> IResult<&str, Interjection> {
    alt((
        map(tuple((parse_phrase, opt(match_tag("a")))), |(p, a)| {
            Interjection::Phrase {
                phrase: p,
                a: a.is_some(),
            }
        }),
        map(match_tag("a"), |_| Interjection::A),
    ))(input)
}

// 8. Lexicon

fn parse_word(input: &str) -> IResult<&str, Word> {
    let (input, w) = peek(lexeme(alpha1))(input)?;

    if PRONOUNS.contains(&w) {
        let (input, _) = lexeme(alpha1)(input)?;
        let p = match w {
            "mi" => Pronoun::Mi,
            "sina" => Pronoun::Sina,
            "ona" => Pronoun::Ona,
            "ni" => Pronoun::Ni,
            _ => unreachable!(),
        };
        Ok((input, Word::Pronoun(p)))
    } else if w == "seme" {
        let (input, _) = lexeme(alpha1)(input)?;
        Ok((input, Word::Question("seme".to_string())))
    } else if CONTENT_WORDS.contains(&w) || PREPOSITIONS.contains(&w) || PREVERBS.contains(&w) {
        let (input, w) = lexeme(alpha1)(input)?;
        Ok((input, Word::Content(w.to_string())))
    } else {
        Err(nom::Err::Error(nom::error::Error::new(
            input,
            nom::error::ErrorKind::Tag,
        )))
    }
}

fn parse_preposition(input: &str) -> IResult<&str, Preposition> {
    let (input, w) = lexeme(alpha1)(input)?;
    match w {
        "lon" => Ok((input, Preposition::Lon)),
        "tawa" => Ok((input, Preposition::Tawa)),
        "tan" => Ok((input, Preposition::Tan)),
        "sama" => Ok((input, Preposition::Sama)),
        "kepeken" => Ok((input, Preposition::Kepeken)),
        _ => Err(nom::Err::Error(nom::error::Error::new(
            input,
            nom::error::ErrorKind::Tag,
        ))),
    }
}

fn parse_preverb(input: &str) -> IResult<&str, Preverb> {
    let (input, w) = lexeme(alpha1)(input)?;
    match w {
        "wile" => Ok((input, Preverb::Wile)),
        "sona" => Ok((input, Preverb::Sona)),
        "awen" => Ok((input, Preverb::Awen)),
        "kama" => Ok((input, Preverb::Kama)),
        "ken" => Ok((input, Preverb::Ken)),
        "lukin" => Ok((input, Preverb::Lukin)),
        _ => Err(nom::Err::Error(nom::error::Error::new(
            input,
            nom::error::ErrorKind::Tag,
        ))),
    }
}

fn parse_proper_noun(input: &str) -> IResult<&str, String> {
    let (input, s) = lexeme(recognize(pair(
        take_while1(|c: char| c.is_ascii_uppercase()),
        take_while(|c: char| c.is_ascii_alphabetic()),
    )))(input)?;
    Ok((input, s.to_string()))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_simple_sentence() {
        let input = "mi moku";
        let res = parse_utterance(input);
        assert!(res.is_ok());
        println!("{:?}", res.unwrap());
    }

    #[test]
    fn test_complex_sentence() {
        let input = "tenpo suno ni la mi wile moku e kili";
        let res = parse_utterance(input);
        match res {
            Ok((rem, u)) => {
                assert_eq!(rem, "");
                println!("{:?}", u);
            }
            Err(e) => panic!("Parse failed: {:?}", e),
        }
    }

    #[test]
    fn test_questions() {
        let input = "sina sona ala sona e toki pona"; // X ala X question
        let res = parse_utterance(input);
        assert!(res.is_ok());
    }

    #[test]
    fn test_mi_sona_ala_e_ni() {
        let input = "mi sona ala e ni.";
        let result = parse_utterance(input);
        assert!(
            result.is_ok(),
            "Failed to parse 'mi sona ala e ni.': {:?}",
            result.err()
        );
    }

    #[test]
    fn test_text_new_multiline() {
        let input = "mi sona ala e ni.
1. tenpo open la, toki li lon. toki li lon poka sewi. toki li sewi.
2. open la, ona li lon poka sewi.
3. ona la, ale li kama lon. ona ala la, ala li kama lon.";
        let text = Text::new(input);
        // We expect "mi sona ala e ni." to be parsed.
        // It should be the first utterance.
        let _utterances: Vec<&Utterance> = text.utterances().collect();
        // If it failed to parse, Text::new skips it, so we won't see it.
        // We expect at least one utterance from the first line.
        let first_text = text.parsed_text();
        assert!(
            first_text.contains("mi sona ala e ni"),
            "First sentence was not parsed! Parsed text: {}",
            first_text
        );
        println!("Parsed text: {}", first_text);
    }

    #[test]
    fn test_broken_sentence_error() {
        // "tenpo la" is a context. "li moku." is invalid main clause (no subject).
        // Should fail HARD (Failure) or generic Error?
        // "li moku" fails parse_main_clause.
        // Because "tenpo la" context succeeded, we `cut` the main clause.
        // So this MUST be a Failure.
        let input = "tenpo la li moku.";
        let res = parse_utterance(input);
        match res {
            Err(nom::Err::Failure(_)) => println!("Correctly failed with Failure"),
            Err(nom::Err::Error(_)) => panic!("Should have been a Failure, got Error"),
            Ok(_) => panic!("Should have failed"),
            _ => panic!("Unexpected result: {:?}", res),
        }

        // "mi moku e." -> "e" followed by nothing.
        // `cut(parse_phrase)` should trigger Failure.
        let input2 = "mi moku e.";
        let res2 = parse_utterance(input2);
        match res2 {
            Err(nom::Err::Failure(_)) => println!("Correctly failed e with Failure"),
            Err(nom::Err::Error(_)) => panic!("Should have been a Failure for e, got Error"),
            Ok(_) => panic!("Should have failed e"),
            _ => panic!("Unexpected result: {:?}", res2),
        }
    }
}

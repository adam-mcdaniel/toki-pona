use crate::ast::*;
use crate::parser::{Token, lexer, parser, token_parser};
use crate::word::Word;
use chumsky::prelude::*;
use colored::*;
use std::collections::BTreeSet;
use std::process;
use std::str::FromStr;
use strum::IntoEnumIterator;

/// Dictionary lookup logic
pub fn dictionary_lookup(input: &str) {
    let clean_input = input.trim().to_lowercase();

    // 1. Try exact match (Toki Pona -> English)
    if let Ok(word) = Word::from_str(&clean_input) {
        println!("{} ({})", input.bold(), word.part_of_speech().italic());
        println!("  {}", word.definition().cyan());
        return;
    }

    // 2. Reverse lookup (English -> Toki Pona)
    let mut found = false;
    for word in Word::iter() {
        let def = word.definition();
        if def.to_lowercase().contains(&clean_input) {
            if !found {
                println!("{}", format!("Matches for '{}':", input).bold().underline());
                found = true;
            }
            println!("{}: {}", word.to_string().cyan().bold(), def);
        }
    }

    if !found {
        eprintln!("Unknown word: {}", input);
        process::exit(1);
    }
}

/// Syntax Highlighting logic
pub fn highlight_text(input: &str) {
    let parser = token_parser()
        .or(any().map(|_| None))
        .map_with_span(|t, span| (t, span))
        .repeated();

    let output = parser.parse(input).unwrap_or_else(|_| vec![]);

    let mut last_pos = 0;
    for (token_opt, span) in output {
        if span.start > last_pos {
            print!("{}", &input[last_pos..span.start]);
        }

        let text = &input[span.start..span.end];
        match token_opt {
            Some(Token::Word(w)) => match w.part_of_speech() {
                "particle" => print!("{}", text.yellow()),
                "pronoun" => print!("{}", text.bold().blue()),
                "preposition" => print!("{}", text.green()),
                _ => print!("{}", text.cyan()),
            },
            Some(Token::ProperNoun(_)) => print!("{}", text.magenta().bold()),
            Some(Token::Punctuation(_)) => print!("{}", text.white().bold()),
            None => print!("{}", text.dimmed()),
        }
        last_pos = span.end;
    }
}

/// Annotation logic (highlight + glossary)
pub fn annotate_text(input: &str) {
    let parser = token_parser()
        .or(any().map(|_| None))
        .map_with_span(|t, span| (t, span))
        .repeated();

    let output = parser.parse(input).unwrap_or_else(|_| vec![]);

    let mut found_words = BTreeSet::new();
    let mut last_pos = 0;
    for (token_opt, span) in output {
        if span.start > last_pos {
            print!("{}", &input[last_pos..span.start]);
        }

        let text = &input[span.start..span.end];
        match token_opt {
            Some(Token::Word(w)) => {
                found_words.insert(w);
                match w.part_of_speech() {
                    "particle" => print!("{}", text.yellow()),
                    "pronoun" => print!("{}", text.bold().blue()),
                    "preposition" => print!("{}", text.green()),
                    _ => print!("{}", text.cyan()),
                }
            }
            Some(Token::ProperNoun(_)) => print!("{}", text.magenta().bold()),
            Some(Token::Punctuation(_)) => print!("{}", text.white().bold()),
            None => print!("{}", text.dimmed()),
        }
        last_pos = span.end;
    }

    if last_pos < input.len() {
        print!("{}", &input[last_pos..]);
    }

    println!("\n\n{}", "--- GLOSSARY ---".bold().underline());
    let mut sorted_words: Vec<_> = found_words.into_iter().collect();
    sorted_words.sort_by_key(|w| w.to_string());

    for word in sorted_words {
        println!("{}: {}", word.to_string().cyan().bold(), word.definition());
    }
}

/// Tree printing logic
pub fn print_tree(input: &str) {
    let lexer = lexer();
    let tokens = match lexer.parse(input) {
        Ok(t) => t,
        Err(e) => {
            eprintln!("Lexing error: {:?}", e);
            process::exit(1);
        }
    };

    let parser = parser();
    match parser.parse(tokens.clone()) {
        Ok(program) => {
            // Check if the program is just junk (failed parse fallback)
            let is_junk = program
                .sentences
                .iter()
                .all(|s| matches!(s, Sentence::Junk(_)));

            if is_junk {
                // Try parsing as a phrase
                let phrase_parser = crate::parser::phrase_parser().then_ignore(end());
                if let Ok(phrase) = phrase_parser.parse(tokens) {
                    println!("{}", "Fragment (Phrase)".bold().underline());
                    print_phrase(&phrase, 1, "Root");
                    return;
                }
            }

            print_program(&program);
        }
        Err(e) => {
            eprintln!("Parse error: {:?}", e);
            process::exit(1);
        }
    }
}

fn print_program(prog: &Program) {
    println!("{}", "Text".bold().underline());
    for (i, sentence) in prog.sentences.iter().enumerate() {
        print_sentence(sentence, 1, i);
    }
}

fn indent(level: usize) -> String {
    "  ".repeat(level)
}

fn print_sentence(sentence: &Sentence, level: usize, index: usize) {
    let prefix = indent(level);

    // Check for junk
    let is_junk = matches!(sentence, Sentence::Junk(_));

    if is_junk {
        println!(
            "{}{}: {}",
            prefix,
            format!("Sentence #{}", index + 1).red().bold(),
            "Junk / Parse Error".red().italic()
        );
        if let Sentence::Junk(content) = sentence {
            println!("    Content: {}", content.red().italic());
        }
        return;
    }

    println!(
        "{}{}: {}",
        prefix,
        format!("Sentence #{}", index + 1).yellow(),
        format!("{:?}", sentence_type(sentence)).dimmed()
    );
    match sentence {
        Sentence::Junk(content) => {
            println!("    Content: {}", content.red().italic());
        }
        Sentence::Vocative(VocativeSentence { target, command }) => {
            println!("{}  {}", prefix, "Type: Vocative".cyan());
            print_phrase(target, level + 2, "Target");
            if let Some(cmd) = command {
                print_normal_sentence(cmd, level + 2);
            }
        }
        Sentence::Question(q) => {
            let method_str = match q.method {
                QuestionMethod::AnuSeme => "anu seme (or what?)",
                QuestionMethod::VerbAlaVerb => "X ala X (yes/no)",
                QuestionMethod::Seme(_) => "seme (what/which)",
                QuestionMethod::Why => "Why (tan seme)",
                QuestionMethod::How => "How (nasin seme)",
            };
            println!(
                "{}  {}",
                prefix,
                format!("Type: Question ({})", method_str).cyan()
            );
            print_normal_sentence(&q.sentence, level + 2);
        }
        Sentence::Normal(n) => {
            print_normal_sentence(n, level + 1);
        }
    }
}

fn sentence_type(s: &Sentence) -> &'static str {
    match s {
        Sentence::Vocative(_) => "Vocative",
        Sentence::Question(q) => match q.method {
            QuestionMethod::Seme(_) => "Question (seme)",
            _ => "Question",
        },
        Sentence::Normal(_) => "Statement",
        Sentence::Junk(_) => "Junk / Parse Error",
    }
}

fn print_normal_sentence(n: &NormalSentence, level: usize) {
    let prefix = indent(level);
    if let Some(ctx) = &n.context {
        println!("{}{}", prefix, "Context:".yellow());
        for (i, part) in ctx.parts.iter().enumerate() {
            match part {
                ContextPart::Phrase(p) => {
                    print_phrase(p, level + 1, &format!("Condition {}", i + 1))
                }
                ContextPart::Sentence(s) => {
                    println!(
                        "{}{}",
                        indent(level + 1),
                        format!("Condition Sentence {}", i + 1).yellow()
                    );
                    print_normal_sentence(s, level + 2);
                }
            }
        }
    }

    match &n.head {
        Head::SubjectPredicate {
            subject,
            predicates,
        } => {
            match subject {
                Subject::Mi => println!(
                    "{}{}: {}",
                    prefix,
                    "Subject".green().bold(),
                    "mi (I, me, my)".blue()
                ),
                Subject::Sina => println!(
                    "{}{}: {}",
                    prefix,
                    "Subject".green().bold(),
                    "sina (you, your)".blue()
                ),
                Subject::Composite(phrases) => {
                    for (i, phrase) in phrases.iter().enumerate() {
                        print_phrase(phrase, level + 1, &format!("Subject {}", i + 1));
                    }
                }
            }

            for (i, pred) in predicates.iter().enumerate() {
                print_predicate(pred, level, &format!("Predicate {}", i + 1));
            }
        }
        Head::Optative {
            subject,
            predicates,
        } => {
            println!("{}  {}", prefix, "(Optative / O)".cyan());
            match subject {
                Subject::Mi => println!(
                    "{}{}: {}",
                    prefix,
                    "Subject".green().bold(),
                    "mi (I)".blue()
                ),
                Subject::Sina => println!(
                    "{}{}: {}",
                    prefix,
                    "Subject".green().bold(),
                    "sina (you)".blue()
                ),
                Subject::Composite(phrases) => {
                    for (i, phrase) in phrases.iter().enumerate() {
                        print_phrase(phrase, level + 1, &format!("Subject {}", i + 1));
                    }
                }
            }
            for (i, pred) in predicates.iter().enumerate() {
                print_predicate(pred, level + 1, &format!("Predicate {}", i + 1));
            }
        }
        Head::PredicateOnly(predicates) => {
            println!("{}  {}", prefix, "(Imperative / Monopredicate)".dimmed());
            for (i, pred) in predicates.iter().enumerate() {
                print_predicate(pred, level, &format!("Predicate {}", i + 1));
            }
        }
        Head::Phrase(p) => {
            println!("{}  {}", prefix, "(Fragment)".dimmed());
            print_phrase(p, level + 1, "Content");
        }
    }
}

fn print_predicate(pred: &Predicate, level: usize, label: &str) {
    let prefix = indent(level);
    println!("{}{}:", prefix, label.green().bold());

    print_phrase(&pred.head, level + 1, "Head (Verb/Adj)");

    for (i, do_obj) in pred.direct_objects.iter().enumerate() {
        print_phrase(do_obj, level + 1, &format!("Direct Object (e) {}", i + 1));
    }

    for (_i, pp) in pred.prepositions.iter().enumerate() {
        print_pp(pp, level + 1);
    }
}

fn format_word_with_def(w: &Word) -> String {
    format!("{} ({})", w.to_string(), w.definition().dimmed())
}

fn print_pp(pp: &PrepositionalPhrase, level: usize) {
    let prefix = indent(level);
    println!(
        "{}{}: {}",
        prefix,
        "Preposition".yellow(),
        format_word_with_def(&pp.preposition).cyan()
    );
    print_phrase(&pp.object, level + 1, "Object");
}

fn print_phrase(phrase: &Phrase, level: usize, label: &str) {
    let prefix = indent(level);

    // Check for X ala X pattern
    // head = X
    // modifiers[0] = ala
    // modifiers[1] = X
    let mut fused_x_ala_x = false;
    if phrase.modifiers.len() >= 2 {
        if let (Modifier::Word(w1), Modifier::Word(w2)) =
            (&phrase.modifiers[0], &phrase.modifiers[1])
        {
            if let PhraseHead::Word(head_word) = phrase.head {
                if *w1 == Word::Ala && *w2 == head_word {
                    fused_x_ala_x = true;
                }
            }
        }
    }

    if fused_x_ala_x {
        // Safe to unwrap here because we checked it above
        let head_word = match phrase.head {
            PhraseHead::Word(w) => w,
            _ => unreachable!(),
        };

        println!(
            "{}{}: {}",
            prefix,
            label.white().bold(),
            format!(
                "{} ala {} ({})",
                head_word,
                head_word,
                head_word.definition().dimmed()
            )
            .blue()
            .bold()
        );
        // Skip first 2 modifiers
        for modifier in phrase.modifiers.iter().skip(2) {
            print_modifier(modifier, level + 1);
        }
    } else {
        match &phrase.head {
            PhraseHead::Word(w) => {
                println!(
                    "{}{}: {}",
                    prefix,
                    label.white().bold(),
                    format_word_with_def(w).blue().bold()
                );
            }
            PhraseHead::ProperNoun(s) => {
                println!("{}{}: {}", prefix, label.white().bold(), s.magenta().bold());
            }
        }
        for modifier in &phrase.modifiers {
            print_modifier(modifier, level + 1);
        }
    }
}

fn print_modifier(modi: &Modifier, level: usize) {
    let prefix = indent(level);
    match modi {
        Modifier::Word(w) => println!("{}{}", prefix, format_word_with_def(w).cyan()),
        Modifier::ProperNoun(n) => println!("{}{}", prefix, n.to_string().magenta()),
        Modifier::PiPhrase(p) => {
            println!("{}{}", prefix, "pi (group)".yellow());
            print_phrase(p, level + 1, "Content");
        }
    }
}

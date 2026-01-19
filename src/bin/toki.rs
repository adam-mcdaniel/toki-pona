use clap::{Parser, Subcommand};
use std::io::{self, Read};
use toki_pona::utils::{annotate_text, dictionary_lookup, highlight_text, print_tree};

#[derive(Parser)]
#[command(name = "toki")]
#[command(about = "Toki Pona unified utility tool", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Look up a word in the dictionary
    Dict {
        /// The word to look up
        word: String,
    },
    /// Highlight Toki Pona text (syntax highlighting)
    Highlight {
        /// Input file (reads from stdin if not provided)
        file: Option<String>,
    },
    /// Annotate text with syntax highlighting and a glossary
    Annotate {
        /// Input file (reads from stdin if not provided)
        file: Option<String>,
    },
    /// Print the Abstract Syntax Tree (AST) of the text
    Tree {
        /// Input file (reads from stdin if not provided)
        file: Option<String>,
    },
}

fn read_input(file_path: &Option<String>) -> io::Result<String> {
    if let Some(path) = file_path {
        std::fs::read_to_string(path)
    } else {
        let mut buffer = String::new();
        io::stdin().read_to_string(&mut buffer)?;
        Ok(buffer)
    }
}

fn main() {
    let cli = Cli::parse();

    match &cli.command {
        Commands::Dict { word } => {
            dictionary_lookup(word);
        }
        Commands::Highlight { file } => match read_input(file) {
            Ok(input) => highlight_text(&input),
            Err(e) => eprintln!("Error reading input: {}", e),
        },
        Commands::Annotate { file } => match read_input(file) {
            Ok(input) => annotate_text(&input),
            Err(e) => eprintln!("Error reading input: {}", e),
        },
        Commands::Tree { file } => match read_input(file) {
            Ok(input) => print_tree(&input),
            Err(e) => eprintln!("Error reading input: {}", e),
        },
    }
}

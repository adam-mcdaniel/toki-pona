use std::env;
use std::process;
use toki_pona::utils::dictionary_lookup;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Usage: dictionary <word>");
        process::exit(1);
    }

    dictionary_lookup(&args[1]);
}

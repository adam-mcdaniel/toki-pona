use std::io::{self, Read};
use toki_pona::utils::annotate_text;

fn main() -> io::Result<()> {
    let mut input = String::new();
    let args: Vec<String> = std::env::args().collect();
    if args.len() > 1 {
        input = std::fs::read_to_string(&args[1])?;
    } else {
        io::stdin().read_to_string(&mut input)?;
    }

    annotate_text(&input);
    Ok(())
}

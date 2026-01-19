use std::collections::HashMap;
use toki_pona::*;

#[test]
fn corpus_coverage() {
    // Walk through the corpus directory and run the parser on each file
    let corpus_dir = "corpus";
    let corpus_files = std::fs::read_dir(corpus_dir).unwrap();
    // For directory in corpus, iterate over files
    let mut dir_coverage = HashMap::new();
    for dir in corpus_files {
        let dir_path = dir.unwrap().path();
        if !dir_path.is_dir() {
            continue;
        }
        let dir_name = dir_path.file_name().unwrap().to_str().unwrap();
        let dir_files = std::fs::read_dir(&dir_path).unwrap();
        dir_coverage.insert(dir_name.to_string(), HashMap::new());
        for file in dir_files {
            let file_path = file.unwrap().path();
            let file_name = file_path.file_name().unwrap().to_str().unwrap();
            if file_name.ends_with(".txt") || file_name.ends_with(".md") {
                let file_name = file_path.file_name().unwrap().to_str().unwrap();
                let file_content = std::fs::read_to_string(file_path.clone()).unwrap();
                // Confirm its ascii first
                if !file_content.is_ascii() {
                    continue;
                }
                let text = ast::Text::new(file_content);
                dir_coverage.get_mut(&dir_name.to_string()).unwrap().insert(
                    file_name.to_string(),
                    (text.raw_text().len(), text.parsed_text().len()),
                );
            }
        }
    }
    // println!("{:#?}", dir_coverage);
    // Print the weighted average of each directory's coverage weighted on the file length.
    for (dir_name, files) in dir_coverage {
        let mut total_bytes = 0.0;
        let mut total_coverage = 0.0;
        for (file_name, (bytes, coverage)) in files {
            total_bytes += bytes as f64;
            total_coverage += coverage as f64;
        }
        println!("{}: {}", dir_name, total_coverage / total_bytes as f64);
    }
}

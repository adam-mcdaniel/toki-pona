use toki_pona::ast::Text;
use toki_pona::utils::{constituency::build_tree, tag_text};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn parse_to_tree(input: &str) -> Result<JsValue, JsValue> {
    let text = Text::new(input);
    let tree = build_tree(&text);
    Ok(serde_wasm_bindgen::to_value(&tree)?)
}

#[wasm_bindgen]
pub fn parse_to_tags(input: &str) -> Result<JsValue, JsValue> {
    let text = Text::new(input);
    let tags = tag_text(&text);
    Ok(serde_wasm_bindgen::to_value(&tags)?)
}

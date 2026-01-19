#!/bin/bash

ROOT_DIR=$(pwd)
echo "Building wasm..."
cd $ROOT_DIR/wasm && wasm-pack build --target web
echo "Building webapp..."
cd $ROOT_DIR/web && npm run build

echo "Copying files..."
rm -Rf $ROOT_DIR/docs
cp -R $ROOT_DIR/web/dist $ROOT_DIR/docs

echo "Done!"
echo "You can now serve the docs directory with any static file server."
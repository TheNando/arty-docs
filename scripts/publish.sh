#!/bin/bash

rm -rf ../arty-pages/*
cp ./README.md ./docs/Getting\ Started.md
cp -r ./build/* ../arty-pages
pushd ../arty-pages
git add .
git commit -m "publish docs"
git push origin gh-pages
popd

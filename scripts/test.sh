#!/bin/bash


if [ -d "scripts" ]; then
  echo "Running build"
  ./node_modules/.bin/gulp build-prep
  ./node_modules/.bin/gulp jekyll-build.clean
fi

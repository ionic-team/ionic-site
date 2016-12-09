#!/bin/bash


if [ -d "scripts" ]; then
  echo "Running build"
  ./node_modules/.bin/gulp build
fi

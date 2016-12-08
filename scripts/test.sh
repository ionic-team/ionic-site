#!/bin/bash


if [ -d "scripts" ]; then
  echo "No tests for now"
  # update search index
  ./node_modules/.bin/gulp docs.index
fi

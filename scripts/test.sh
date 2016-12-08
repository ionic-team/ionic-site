#!/bin/bash


if [ -d "_scripts" ]; then
  echo "No tests for now"
  # update search index
  ./node_modules/.bin/gulp docs.index
fi

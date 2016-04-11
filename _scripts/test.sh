#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function buildforjekyll {
  echo "Building site with jekyll"
  jekyll build --incremental
}

if [ -d "_scripts" ]; then
  buildforjekyll
fi

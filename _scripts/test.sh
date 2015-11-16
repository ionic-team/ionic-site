#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function buildforjekyll {
  echo "Building site with jekyll"
  jekyll build
}

function runlinkchecker {
  echo "Starting linkchecker"
  cd _site
  python -m SimpleHTTPServer 8000 &> /dev/null &
  pid=$!
  linkchecker http://localhost:8000 -ohtml --timeout=5 --ignore-url=^mailto > linkchecker.html
  kill $pid
}

if [ -d "_scripts" ]; then
  buildforjekyll
  runlinkchecker
fi

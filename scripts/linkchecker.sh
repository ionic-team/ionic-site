#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function runlinkchecker {
  echo "Starting linkchecker"
  pip install LinkChecker
  cd _site
  python -m SimpleHTTPServer 3000 &> /dev/null &
  pid=$!
  linkchecker http://localhost:3000 -ohtml --timeout=5 --ignore-url=^mailto > linkchecker.html
  kill $pid
  sed -i -e 's/localhost:8000/ionic-site-staging.herokuapp.com/g' linkchecker.html
  rm -r venv
  cd ..
}

if [ -d "scripts" ]; then
  runlinkchecker
fi

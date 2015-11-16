#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function clone_site {
  echo "Cloning ionic-site in _site"
  mkdir ./_site
  cd _site
  git clone https://$GH_AUTH_TOKEN@github.com/driftyco/ionic-site.git .
  git config --global user.email "hi@ionicframework.com"
  git config --global user.name "ionitron"

  echo "Checking out production branch"
  git checkout production
  cd ..
}

if [ -d "_scripts" ]; then
  clone_site
fi

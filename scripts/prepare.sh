#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function clone_site {
  PROD_DIR="_site"

  if [ ! -d "$PROD_DIR" ]; then
    echo "Cloning ionic-site in _site"
    mkdir $PROD_DIR
    cd $PROD_DIR


    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "ionitron"

    git clone --depth 1 --branch=production git@github.com:driftyco/ionic-site.git .
    cd ..
  else
    echo "using existing"
    cd $PROD_DIR
    git fetch origin production
    git reset --hard
    git clean -df
    git pull origin production
  fi
}

function buildforjekyll {
  echo "Building site with jekyll"
  #jekyll build --incremental
  jekyll build
}

if [ -d "scripts" ]; then
  clone_site
  buildforjekyll
fi

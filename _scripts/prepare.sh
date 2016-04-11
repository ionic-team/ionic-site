#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function clone_site {
  PROD_DIR="_site"

  if [ ! gem list jekyll -i ]
    gem install jekyll -v 3.0.1 && gem install kramdown && gem install rouge
  fi

  if [ ! -d "$PROD_DIR" ]; then
    echo "Cloning ionic-site in _site"
    mkdir $PROD_DIR
    cd $PROD_DIR
    git clone --depth 1 --branch=production https://$GH_AUTH_TOKEN@github.com/driftyco/ionic-site.git .
    git config --global user.email "hi@ionicframework.com"
    git config --global user.name "ionitron"
    cd ..
  else
    echo "using existing"
    cd $PROD_DIR
    git reset --hard
    git pull origin production
  fi
}

if [ -d "_scripts" ]; then
  clone_site
fi

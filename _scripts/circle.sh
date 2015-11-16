#!/bin/bash

ARG_DEFS=(
  "--index=(.*)"
  "--total=(.*)"
)

function buildforjekyll {
  echo "Cloning ionic-site in _site"
  mkdir ./_site
  cd _site
  git clone https://$GH_AUTH_TOKEN@github.com/driftyco/ionic-site.git .
  git config --global user.email "hi@ionicframework.com"
  git config --global user.name "ionitron"
  # git init
  # git pull https://$CIRCLE_SHA1@github.com/driftyco/ionic-site.git

  echo "Checking out production branch"
  git checkout production

  echo "Building site with jekyll"
  cd ..
  jekyll build

  echo "Committing to production branch"
  cd ./_site
  git add . --all
  git commit -m "automated build of $CIRCLE_SHA1"

  echo "Pushing production branch to origin"
  git push origin production
  cd ..

  #echo "Cleaning up"
  #rm -R _site
}

if [ -d "_scripts" ]; then
  buildforjekyll
fi

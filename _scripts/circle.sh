#!/bin/bash

ARG_DEFS=(
  "--index=(.*)"
  "--total=(.*)"
)

function run {
  echo "Cloning ionic-site in _site"
  mkdir ./_site
  cd _site
  git clone https://$GH_AUTH_TOKEN@github.com:driftyco/ionic-site.git .

  echo "Checking out production branch"
  git checkout origin/production -b production

  echo "Building site with jekyll"
  cd ..
  jekyll build

  echo "Committing to production branch"
  cd ./_site
  git commit -a -m "automated build of $CIRCLE_SHA1"

  echo "Pushing production branch to origin"
  git push origin production
  cd ..

  echo "Cleaning up"
  rm -R _site
}

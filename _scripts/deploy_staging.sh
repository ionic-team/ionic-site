#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function deploy {

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
  deploy
fi

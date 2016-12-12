#!/bin/bash

ARG_DEFS=(
  # "--index=(.*)"
  # "--total=(.*)"
)

function deploy {

  echo "Committing to production branch"
  cd ./_site
  git config --global user.email "hi@ionicframework.com"
  git config --global user.name "ionitron"
  git add . --all
  git commit -m "automated build of driftyco/$CIRCLE_PROJECT_REPONAME@$CIRCLE_SHA1"

  echo "Pushing production branch to origin"
  # in case a different commit was pushed to ionic-site during doc/demo gen,
  # try to rebase around it before pushing
  git fetch
  git rebase
  git push origin production
  cd ..

  #echo "Cleaning up"
  #rm -R _site
}

if [ -d "scripts" ]; then
  deploy
fi

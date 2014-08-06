#!/bin/bash

# note, the first time you run this on your computer, you'll need to run this a second time

# steps:
# make a change to the site under the master branch
# commit and push that change
# fetch all, making sure that you're tracking gh-pages
# run this script

MASTER_DIR=$PWD
PAGES_DIR=$PWD/_site

git branch -D gh-pages
rm -rf $PAGES_DIR
git clone . $PAGES_DIR
cd _site
git checkout --orphan gh-pages
rm -rf *
git add --all
git commit -m "prep for deploy"
git remote rm origin
git remote add origin git@github.com:driftyco/ionic-site.git
cd $MASTER_DIR
gulp sass
jekyll build
cd $PAGES_DIR
git add --all
git commit -m "Content creation"
git push -f origin gh-pages
cd ..

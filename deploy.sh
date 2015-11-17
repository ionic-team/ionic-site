#!/bin/bash
jekyll build
# git add _site/
msg=$(git status --porcelain | head -c 80)
git commit -m "deploy:$msg"
git push origin master

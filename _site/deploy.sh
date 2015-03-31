#!/bin/bash
jekyll build
git add _site/
git commit -m "DEPLOY"
git push origin master

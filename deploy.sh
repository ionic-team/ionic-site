git branch -D gh-pages
rm -rf _site
git clone . _site
cd _site
git checkout --orphan gh-pages
rm -rf *
git add --all
git commit -m "prep for deploy"
git remote rm origin
git remote add origin git@github.com:driftyco/ionic-site.git
cd ..
gulp sass
jekyll build
cd _site
git add --all
git commit -m "Content creation"
git push -f origin gh-pages
cd ..

ionic-site
==========

Repo for the ionicframework.com site.  To preview local Ionic changes, follow the instructions at the [Ionic repo](https://github.com/ionic-team/ionic#documentation).


gulp watch uses LiveReload. You may have to up your max file limit with the following command:

    ulimit -n 7000


## Local Build

1. Run `npm install`
2. Install gems (Jekyll and kramdown): `npm run bundle-install`

    > This will re-construct your `Gemfile.lock` for the specific platform you are developing on and exclude it from Git.  If you need to make a change to the `Gemfile`, or are updating gems, you will need to remove the `Gemfile.lock` from `.git/info/exclude`.

3. Run `gulp watch` (after the first run, this is the only step needed)


## CI Explanation

Ionic v1 and v2 now automatically deploy their changes to an Ionic staging server. Ionic team members are given permission to the staging and production servers in Heroku. V1 and V2 docs changes go as follows:

1. Change the content of the docs as necessary.
2. Optionally preview the changes by running `gulp docs` in the Ionic v1/2 repo, and `gulp watch` in ionic site, which should be a sibling directory of the `ionic` and `ionic2` repos.
3. Commit and push changes
4. Sit back. The [Ionic v1 CI tasks](https://circleci.com/gh/ionic-team/ionic) and the [Ionic v2 CI tasks](https://circleci.com/gh/ionic-team/ionic2) will generate the new docs and push them to the `ionic-site` repo. The `ionic-site` CI tasks will then build them and automatically deploy them to the staging server.
5. Preview changes on the [staging server](https://ionic-site-staging.herokuapp.com/) and promote the changes to production if all looks well. Be sure to give the site a quick look over to make sure things look good.


## Third Party Libraries

3rd part libraries should be concatenated into the site bundle by adding them via package.json and specifying what files to include in the `assets/3rd-party-libs.json` file. 


## Deploy

Changes to master are automatically deployed to  [ionic-site-staging.herokuapp.com/](https://ionic-site-staging.herokuapp.com/). Periodically, the core framework will inspect staging and promote it to [ionicframework.com](https://ionicframework.com).


## Troubleshooting

Occasionally, people get a Jekyll error the first time they run `gulp watch`. Try deleting `Gemfile.lock` and re-running `bundle install` and then try again. Be sure to set your local git to exclude the changed `Gemfile.lock` file. 


## Community

* Follow [@ionicframework on Twitter](https://twitter.com/ionicframework).
* Subscribe to the [Ionic Newsletter](https://ionicframework.com/subscribe/).
* Have a question that's not a feature request or bug report? [Discuss on the Ionic Forum](https://forum.ionicframework.com/).
* Read our [Blog](https://ionicframework.com/blog/).
* Have a feature request or find a bug? [Submit an issue](https://github.com/ionic-team/ionic/issues).

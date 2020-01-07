ionic-site
==========

Repo for the ionicframework.com site.  To preview local Ionic changes, follow the instructions at the [Ionic repo](https://github.com/ionic-team/ionic#documentation).

## No Docs Here

Ionic Docs are in a [separate repo](https://github.com/ionic-team/ionic-docs/). This site is primarily used for general communications and promotion of Ionic framework and related products and services. 

## Local Build

1. Run `npm install`
2. Run `npm rstart` (after the first run, this is the only step needed)


## Third Party Libraries

3rd part libraries should be concatenated into the site bundle by adding them via package.json and specifying what files to include in the `assets/3rd-party-libs.json` file. 


## Deploy

Changes to master are automatically deployed to  [staging.ionicframework.com/](https://staging.ionicframework.com/). Periodically, the Ionic tean will inspect staging and promote it to [ionicframework.com](https://ionicframework.com).


## Community

* Follow [@ionicframework on Twitter](https://twitter.com/ionicframework).
* Subscribe to the [Ionic Newsletter](https://ionicframework.com/subscribe/).
* Have a question that's not a feature request or bug report? [Discuss on the Ionic Forum](https://forum.ionicframework.com/).
* Read our [Blog](https://ionicframework.com/blog/).
* Have a feature request or find a bug? [Submit an issue](https://github.com/ionic-team/ionic/issues).
* See a problem with our documentation? [Submit an issue](https://github.com/ionic-team/ionic-docs/issues).
* See a typo or browser bug on a non-docs page? [Submit an issue](https://github.com/ionic-team/ionic-site/issues).

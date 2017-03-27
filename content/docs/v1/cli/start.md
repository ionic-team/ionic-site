---
layout: docs_cli
title: "Ionic CLI"
header_title: Start a new Ionic App
header_sub_title: The powerful command line utility
---

# Starting an Ionic App

```bash
$ ionic start myapp [template]
```

Starter templates can either come from a named template, a Github repo, a Codepen, or a local directory. A starter template is what becomes the `www` directory within the Cordova project.


### Named template starters

* [tabs](https://github.com/driftyco/ionic-starter-tabs) (Default)
* [sidemenu](https://github.com/driftyco/ionic-starter-sidemenu)
* [blank](https://github.com/driftyco/ionic-starter-blank)


### Github Repo starters

* Any Github repo url, ex: [https://github.com/driftyco/ionic-starter-tabs](https://github.com/driftyco/ionic-starter-tabs)
* Named templates are simply aliases to Ionic starter repos


### Codepen URL starters

* Any Codepen url, ex: [http://codepen.io/ionic/pen/odqCz](http://codepen.io/ionic/pen/odqCz)
* [Ionic Codepen Demos](http://codepen.io/ionic/public-list/)


### Local directory starters:

* Relative or absolute path to a local directory


### Command-line flags/options:

```
--appname, -a  .......  Human readable name for the app
                        (Use quotes around the name)
--id, -i  ............  Package name set in the <widget id> config
                        ex: com.mycompany.myapp
--no-cordova, -w  ....  Do not create an app targeted for Cordova
```
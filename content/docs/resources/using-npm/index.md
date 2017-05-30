---
layout: fluid/docs_base
category: resources
id: using_npm
title: Using NPM
header_sub_title: Ionic Resources
---

# Using NPM

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/resources/using-npm/index.md'>
  Improve this doc
</a>

There is a lot of new terminology in Ionic, much of it having to do with Node and NPM. Let's take a look at some key concepts with Node/NPM, and how they relate to Ionic.

## Ionic NPM packages - What's in a name?

There are two packages related to Ionic on NPM &mdash; the Ionic CLI package and the Ionic-Angular package.

### Ionic CLI

The CLI (**C**ommand **L**ine **I**nterface) is the main tool that you will use to create a project, build native apps, and handle bundling your app's resources. This package is available on NPM and is called `ionic`. To install, run:

```bash
# if on linux/osx, run with sudo
npm install -g ionic
```

This will install the latest stable release of the Ionic CLI.

Then we can use the CLI from the command line by running `ionic <command>`.


### Ionic Angular

The framework is available on NPM under the name `ionic-angular`. When you create a project using the CLI, you will automatically get the Ionic Angular package installed. The package and its version are managed through NPM and a project's `package.json`. A simple project should have a `package.json` that looks like this.


```json
{
  "dependencies": {
    "ionic-angular": "2.0.0-beta.4"
  }
}
```

Here we are saying that this project depends on the `ionic-angular` package and it uses the version `3.0.0`. But how do we update a packaged when a new version comes out? To check if there is an update, we can run

```bash
npm outdated

Package                           Current          Wanted          Latest     Location
ionic-angular                       3.0.0           3.0.0           3.0.1        myApp
```

This tells us that there is an update to the ionic-framework package, version `3.0.1`. To get this update, we can run `npm install ionic-angular@latest --save`. Alternatively, we could update our `package.json` to `"ionic-angular": "3.0.1"`, and then run `npm update`.

---
layout: v2_fluid/docs_base
category: resources
id: using_npm
title: Ionic 2 | Resources | Using NPM
header_title: Resources - Using NPM
header_sub_title: Ionic 2 Developer Preview
---

# Using NPM

There is a lot of new terminology in Ionic V2, much of it having to do with Node and NPM. Let's take a look at some key concepts with Node/NPM and how this relates to Ionic.

## Ionic NPM packages - Whats in a name?

There are two packages that relate to Ionic on NPM. The Ionic CLI package and the Ionic-Framework package.

### Ionic CLI

The CLI (**C**ommand **L**ine **I**nterface) is the main tool that you will use to create a project, build native apps, and handle bundling your apps resources. This package is available on NPM and is called `ionic`. To install, run:

```bash
# if on linux/osx, run with sudo
npm install -g ionic
```

This will install the latest stable release of the Ionic CLI. To install the latest beta release, which is currently required for V2 development, run:

```bash
# if on linux/osx, run with sudo
npm install -g ionic@beta
```
Then we can use the CLI from the command line by running `ionic <command>`.


### Ionic Framework

The framework is available on NPM under the name `ionic-framework`. When you create a project using the CLI, you will automatically get the Ionic Framework package installed. The package and it's version are managed through NPM and a projects `package.json`. A simple project should have a `package.json` that looks like this.

```javascript
{
  "devDependencies": {
  // List of devDependencies
  },
  "dependencies": {
    "ionic-framework": "2.0.0-alpha.34"
  }
  // and anything else
}
```

Here we are saying that this project depends on the `ionic-framework` package and it uses the version `2.0.0-alpha.34`. But how do we update a packaged when a new version comes out? To check if there is an update, we can run

```bash
npm outdated

Package                           Current          Wanted          Latest  Location
ionic-framework            2.0.0-alpha.34  2.0.0-alpha.34  2.0.0-alpha.35  myApp
```

This tells us that there is an update to the ionic-framework package, version `2.0.0-alpha.35`. To get this update, we can run `npm update`.

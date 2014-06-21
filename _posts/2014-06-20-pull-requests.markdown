---
layout: post
title:  "The Art of a Successful Pull Request"
date:   "2014-06-20 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

When we started Ionic we didn't have much experience managing popular open source projects. So when the project started taking off, gaining 6600 stars and 90 contributors submitting hundreds of pull requests from countries all over the world in just 6 short months, we had to learn quickly how to successfully manage a growing open source project.

<!--
One huge innovation in open source in the last several years has been the Pull Request. The idea behind a Pull Request is that an open source project can accept changes and improvements from anyone all over the world, without managing the complexities of contributor access and forming monolithic development teams.

To create a pull request on GitHub, for example, a developer just has to "fork" the code, make their changes, and submit the Pull Request back to the official repository, essentially requesting that we "pull" in their changes into the official repo.
-->

One crucial aspect of open source software development is the Pull Request. Pull requests make it possible to accept changes and improvements from the community without dealing with the complicated nature of committer privileges or growing a monolithic development team.

The problem with pull requests is that their creation is unmanaged. Meaning PRs often end up with code styles and implementation details that don't fit with the standards or goals of the main project. Since every open source project relies on its community to improve the project through code contributions, enabling and encouraging pull requests is crucial.

Here are some steps to successfully creating pull requests that get merged in your favorite open source project:

###One commit, one change

A good pull request is easy to reason about. It has just one commit, and changes *as few things* as possible.

If a pull request addresses multiple issues or is treated as a "work in progress" PR, then it will be difficult to verify the PR is self-contained and does not cause unintended issues.

Example of a good one: [https://github.com/driftyco/ionic/pull/1478](https://github.com/driftyco/ionic/pull/1478)

Example of a not so good one:  [https://github.com/driftyco/ionic/pull/654](https://github.com/driftyco/ionic/pull/654)

###Scratch everyone's itch

Don't submit PRs that are so limited in scope that they wouldn't be useful to the entire community. Examples are extremely custom UI elements (using Ionic as an example), to functionality or API changes to better fit your application.

###Label WIP PRs as such

Work-in-progress PRs are really useful. Done well, they provoke discussion, make it easy to track progress, and invite review from the community.

However, WIP PRs are more appropriate for mandated work that has already been agreed upon by the project owners. 

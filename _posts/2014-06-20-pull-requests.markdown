---
layout: post
title:  "The Art of a Successful Pull Request"
date:   "2014-06-20 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

When we started Ionic we didn't have much experience managing popular open source projects. So when Ionic started taking off, gaining 6600 stars and 90 contributors submitting hundreds of pull requests from countries all over the world in just 6 short months, we had to learn quickly how to successfully manage a growing open source project.

<!--
One huge innovation in open source in the last several years has been the Pull Request. The idea behind a Pull Request is that an open source project can accept changes and improvements from anyone all over the world, without managing the complexities of contributor access and forming monolithic development teams.

To create a pull request on GitHub, for example, a developer just has to "fork" the code, make their changes, and submit the Pull Request back to the official repository, essentially requesting that we "pull" in their changes into the official repo.
-->

The problem with pull requests is that their creation is unmanaged. Meaning PRs often end up with code styles and implementation details that don't fit with the standards or goals of the main project.

Since every open source project relies on its community to improve the project through code contributions, enabling and encouraging pull requests is crucial.

Here are some steps to successfully creating pull requests that get merged in your favorite open source project:

###One commit

This is crucial. A good pull request is easy to reason about. It has just one commit, and changes *as few things* as possible.

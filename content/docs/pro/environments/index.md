---
layout: fluid/pro_docs_base
category: pro-environments
id: pro-environments
title: App Environments
header_sub_title: Environment Variables | Ionic Pro
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Build Environments

Every time Ionic deploys or packages your code, we do it in a secure environment and provide configurable key/value pairs you can leverage to customise the build and outputs.

## Default Environment

We provide the following environment variables in every build, which you can access in any of your build scripts:

* `CI_APP_ID` **(string):** Your Ionic app's unique ID.
* `CI_APP_NAME` **(string):** Your Ionic app's name.
* `CI_GIT_COMMIT_SHA` **(string):** The SHA for the commit on which the build was run.
* `CI_GIT_REF` **(string):** The git ref from which the build was created (i.e. `master`).
* `CI_GIT_REF_TYPE` **(string):** The git ref type (i.e. `branch`).

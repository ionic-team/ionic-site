---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""

category: api
id: api
title: Javascript
header_sub_title: Extend Ionic even further with the power of AngularJS
searchable: false
---

# API Overview

The Ionic API documentation covers two types of items — *components* and *injectables*. Excluding the source code, this is the lowest level documentation available for these two topics. If you’re looking for a higher level introduction on either of these topics, check out the [Component Documentation](../components).

The *component* documentation includes a description and a basic usage section for each component. Each component will also list its selector and available attributes. Attributes affect the styling (HTML/CSS) and/or the functionality (JS) of the component. If it’s possible to select the component, the methods available to the selected instance will be listed in this section.

An *injectable* is a singleton that can be injected into an [App](decorators/app) or a [Page](decorators/page). Put simply, it is an object that contains functions that perform an action, or change the behavior of your application. Injectables can be used to do anything from programmatically selecting a checkbox, to navigating to a new page. The API documentation on injectables covers basic usage, available methods, and the parameters those methods expect.

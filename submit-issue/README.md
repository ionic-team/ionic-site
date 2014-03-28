# Issue Template

![Issue Template logo](app/resources/github-issue-template-logo.png)

A way for GitHub projects to make templates for GitHub issues.

## Brief Overview

This tool was originally created for the [AngularJS](http://github.com/angular/angular.js) project because at the time of this writing it has almost 1,000 open issues. Triaging that many issues can be extremely difficult. However, using an issue template makes it much easier to quickly get an idea of what the issue is referring to (and if you have an automated account like [Mary Poppins](https://github.com/mary-poppins) you can even automatically assign the issue and give it the proper labels). It's a huge win for both the issue reporter and the project maintainer(s).

## Creating a Template

Simply go to http://issuetemplate.com/#/new-template to begin. Fill out the form and submit the template.

### Form Details

I'll be making a template for feature requests for http://github.com/kentcdodds/genie as an example.

 - Owner: kentcdodds
 - Repo: genie
 - Template Name: feature
 - Issue Title Template: Feature {{title}} (use {{title}} to fill in what they will type, this is parsed to create the issue title).
 - Template... er... Template: (See below)

#### Fields

 - Name: Feature Summary (this is what will be used for the field label)
 - Element: input (this is the html form element)
 - Element Type: text (an sensible html form element type if applicable)
 - Value(s): `blank` (Any pre-filled comma separated value(s) you wish to have for this field. In the case of `select` element or `checkbox/radio` input element types, these will be the values available for selection)

#### Template

The actual template is what the body of the issue will become (post-parsing). The parsing is extremely simple. You can use `{{title}}` to be whatever the user enters as a title and `{{field0}}` which references the value for the first field, and `{{field1}}` for the second field, etc.

#### Comments

Every template will also be given a comment `textfield` automatically and this will be inserted at the bottom of the issue body.

### Submitting

Upon template submission, you'll be given a URL for the template you just created which will follow this standard: `/{{owner}}/{{repo}}/{{templateName}}`. If you wish to edit your template, simply go to that page, and an edit button will appear at the top of the page (or you can append `/edit` to the end of the template's URL.
  
## Submitting an Issue

On the home page you can search repository templates. Select the one you want and fill out the form. It's fairly simple. You can also get to the template form by going to: `/{{owner}}/{{repo}}/{{templateName}}` (for example `/kentcdodds/genie/feature/`)

### Updating an issue

If you have an existing issue you wish to change to a form, you can have it pre-loaded by appending the issue number like so: `/{{owner}}/{{repo}}/{{templateName}}/{{number}}` (for example `/kentcdodds/genie/feature/18`)

## Basic Security

 - Only contributors to a repository can create/edit/delete templates for that repository
 - Anyone with a GitHub account can see the template and make a copy of it.
 - Anyone with a GitHub account can create issues for public repositories

## Other
 - I don't know how this will behave with private repositories... I don't have any to test with. If you have trouble, consider making a [PR](https://github.com/kentcdodds/issue-template/pulls) :)
 
## Questions & Issues

Please don't hesitate to [submit an issue](http://github.com/kentcdodds/issue-template). (Note: I'm not using this project for this repo because it's not too difficult for me to triage issues :D)

## License

The MIT License (MIT)

Copyright (c) 2014 Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

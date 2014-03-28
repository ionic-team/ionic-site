var ISSUE_TEMPLATE = 
  '<span issue-template></span>\n' +
  '**Issue Type: <span ionic-type><%= type %></span>\n\n' +
  '<% if (component) { %>' +
    '**Component**: <span ionic-component><%= component %>\n\n' +
  '<% } %>' +
  '<% if (platformName || platformVersion) { %>' +
    '**Platform**: <span ionic-platform-name><%= platformName %></span> ' +
    '<span ionic-platform-version><%= platformVersion %></span>\n\n' +
  '<% } %>' +
  '<% if (webview) { %>' +
    'Webview: <span ionic-webview><%= webview %></span>\n\n' +
  '<% } %>' +
  '<span ionic-description><%= description %></span>';

var app = angular.module('issueApp', ['firebase', 'ga'])

.constant('Firebase', Firebase)
.constant('markdown', markdown)

.controller('AppCtrl', function() {
  $scope.issue = {
    title: '',
    type: '',
    component: '',
    platformName: '',
    platformVersion: '',
    webview: '',
    description: ''
  };

  //id: name
  $scope.typeOptions = {
    bug: 'bug',
    docs: 'docs',
    feat: 'feature',
    perf: 'performance'
  };
  $scope.platformOptions = {
    android: 'android',
    ios: 'ios',
    ie: 'internet explorer',
    firefox: 'firefox',
    chrome: 'chrome'
  };
  $scope.componentOptions = [
    'action sheet',
    'animations',
    'cards',
    'checkbox',
    'content',
    'footers',
    'gesture',
    'grid',
    'headers',
    'inputs',
    'lists',
    'loading',
    'menus',
    'navigation',
    'modal',
    'popup',
    'platform',
    'radio',
    'range',
    'scroll',
    'slide box',
    'tabs',
    'toggle',
    'tap/click',
    'view'
  ];
})

;

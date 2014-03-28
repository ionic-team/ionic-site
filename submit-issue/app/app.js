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

var IssueApp = angular.module('issueApp', ['firebase', 'ga', 'ngAnimate'])

.constant('Firebase', Firebase)
.constant('markdown', markdown)

.controller('AppCtrl', function($scope) {
  $scope.issue = {
    title: '',
    type: '',
    component: '',
    platform: '',
    iosVersion: '7',
    androidVersion: '4.4',
    webview: null,
    description: ''
  };

  $scope.typeOptions = [
    { id: 'bug', label: 'bug' },
    { id: 'perf', label: 'performance' },
    { id: 'docs', label: 'documentation' },
    { id: 'feat', label: 'feature request' }
  ];
  $scope.platformOptions = [
    { id: 'ios', label: 'ios' },
    { id: 'android',  label: 'android' },
    { id: 'mobile', label: 'all mobile devices' },
    { id: 'desktop', label: 'desktop' }
  ];
  $scope.iosVersions = [
    '7',
    '6'
  ];
  $scope.androidVersions = [
    '4.4', 
    '4.3',
    '4.2',
    '4.0',
    '4.1',
    '4.x',
    '2.x'
  ];
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

.directive('stepMaster', function() {
  return {
    controller: function StepCtrl() {
      this.stepsDone = 0;
      this.numSteps = 0;
    }
  };
})
.directive('step', function() {
  return {
    transclude: true,
    restrict: 'A',
    require: '^stepMaster',
    template: 
      '<div ng-if="showStep()" class="fade-down">' +
        '<h3>' +
          '<span ng-if="!noTotal">[ {{stepText()}} ]</span> ' +
          '{{heading}}' +
        '</h3>' +
        '<div ng-transclude></div>' +
      '</div>',
    scope: true,
    link: function(scope, elm, attr, stepsCtrl, transclude) {
      if (!attr.noTotal) {
        stepsCtrl.numSteps++;
      }

      scope.noTotal = attr.noTotal;
      scope.heading = attr.heading;
      scope.step = +attr.step;

      var doneWatch = scope.$parent.$watch(attr.isDone, function(done) {
        if (done) {
          stepsCtrl.stepsDone++;
          doneWatch();
        }
      });

      scope.stepText = function() {
        return (1+scope.step) + ' / ' + stepsCtrl.numSteps;
      };

      scope.showStep = function() {
        return stepsCtrl.stepsDone >= scope.step;
      };
    }
  };
})
.directive('textarea', function() {
  return {
    restrict: 'E',
    link: function(scope, elm, attr) {
      jQuery(elm[0]).autosize();
    }
  };
})

;

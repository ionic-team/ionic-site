var IssueApp = angular.module('issueApp', ['firebase', 'ga', 'ngAnimate'])

.constant('Firebase', Firebase)
.constant('markdown', markdown)

.controller('AppCtrl', function($scope, $rootScope, LoginService, GitHubService, $http) {

  $scope.issue = {
    title: '',
    type: '',
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
    { id: 'desktop', label: 'desktop' },
    { id: 'all', label: 'all platforms' }
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

  var user;
  $rootScope.$on('userStateChange', function(e, newUser) {
    user = newUser;
  });
  $scope.authenticated = function() {
    return !!user;
  };
  $scope.currentUser = function() {
    return user;
  };
  $scope.signIn = function() {
    return LoginService.login(null, function() {
    });
  };
  $scope.signOut = function() {
    return LoginService.logout();
  };

  var issueTitleTemplate = '<%= type %>: <%= title %>';
  var issueTemplatePromise = $http.get('/submit-issue/issue-template.html')
    .then(function(response) {
      return response.data;
    });
  $scope.submitIssue = function() {
    $scope.issue.loading = true;
    return issueTemplatePromise.then(function(template) {
      return GitHubService.submitIssue({
        title: _.template(issueTitleTemplate, $scope.issue),
        body: _.template(template, $scope.issue)
      }, user.accessToken, 'driftyco', 'ionic');
    }).then(function(response) {
      alert('Issue Submitted Succesfully! Going there now.');
      window.location.href = response.data.html_url;
    }, function(err) {
      $scope.issue.loading = false;
      alert('Issue Submission Error! Try again.');
    });
  };

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
          '&nbsp;<i ng-if="done" class="fa fa-angle-down fade-down" style="color: #4a87ee"></i>' +
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

      var doneWatch = scope.$parent.$watch(function() {
        return scope.$eval(attr.isDone) && scope.showStep();
      }, function(done) {
        if (done) {
          scope.done = true;
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

var IssueApp = angular.module('issueApp', ['firebase', 'ga', 'ngAnimate', 'ngSanitize'])

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
    '8',
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
  $scope.suggestions = [];

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

  $scope.requestSuggestions = function(){
    // only call the API every 3 seconds to accomidate rate limit
    $scope.suggestionOutdated = true;
    $scope.hasSearched = true;
    $scope.getSuggestions($scope.issue.title);
  }

  $scope.getSuggestions = function(query){
    if(query.length < 5)return $scope.suggestions = [];
    console.log('searching issues for: '+query);
    $scope.gettingSuggestion = true;
    GitHubService.searchIssues({},user.accessToken, 'driftyco', 'ionic', $scope.issue.title).then(function(data){
    //$http.get('test.json').then(function(data){
      $scope.suggestions = data.data.items.splice(11,11);
      $scope.gettingSuggestion = false;
      $scope.suggestionOutdated = false;
      console.log($scope.suggestions);
    });
  };

  $scope.openTab = function(url){
    window.open(url)
  };

  NProgress.configure({ showSpinner: false, parent: '#progress-bar-wrapper' });

  $scope.steps = [];
  $scope.$on('stepUpdate',function(event, stepObj){
    $scope.steps = calcSteps(stepObj.completedSteps, stepObj.totalSteps);
    console.log($scope.steps);
  });

  function calcSteps (curStep, totSteps){
    var s = [];
    for(var i =0; i<totSteps; i++){
      s.push({
        num:i+1,
        complete:i<curStep,
        bounce:((i+1 === curStep) || curStep === totSteps)
      });
    }
    return s;
  }
  $scope.steps = calcSteps(0, 5);
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
          '{{heading}}' +
          '&nbsp;<i ng-if="done" class="icon ion-ios7-checkmark-empty" style="color: #4a87ee"></i>' +
        '</h3>' +
        '<div ng-transclude></div>' +
      '</div>',
    scope: true,
    link: function(scope, elm, attr, stepsCtrl) {
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

          // update nprogress
          var percentDone = stepsCtrl.stepsDone * (1/(stepsCtrl.numSteps-1));
          // don't let the bar finish and disappear
          if(percentDone >= 1) percentDone = .99;
          console.log(percentDone);
          NProgress.set(percentDone);
          // emit the update for other controllers to use
          scope.$emit('stepUpdate', {totalSteps:stepsCtrl.numSteps,completedSteps:stepsCtrl.stepsDone});
        }
      });

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
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
})
;

angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

 $stateProvider

  .state('index', {
    url: '/',
    templateUrl: 'templates/page1.html'
  })

  .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page3.html'
  });

  $urlRouterProvider.otherwise("/");

});


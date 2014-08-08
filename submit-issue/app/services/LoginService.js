/* 
 * LoginService, By Kent C Dodds
 * https://github.com/kentcdodds/issue-template
 * MIT License https://github.com/kentcdodds/issue-template/blob/master/LICENSE
 */
IssueApp.factory('LoginService', function(Firebase, $firebaseSimpleLogin, $rootScope) {
  var firebaseRef = new Firebase('https://ionic-issues.firebaseio.com');
  var loginObj = $firebaseSimpleLogin(firebaseRef);
  var firstWatchExecuted = false;
  var tempWatch = $rootScope.$watch(function() {
    return loginObj.user;
  }, function(user) {
    if (firstWatchExecuted) {
      broadcastStateChange(user);
      tempWatch();
    } else {
      firstWatchExecuted = true;
    }
  });

  function broadcastStateChange(user) {
    $rootScope.$broadcast('userStateChange', user);
  }

  return {
    logout: function() {
      loginObj.$logout();
      broadcastStateChange();
    },
    login: function() {
      loginObj.$login('github', {
        scope: 'public_repo',
        rememberMe: true
      }).then(function(user) {
        broadcastStateChange(user);
      });
    },
    getUser: function() {
      return loginObj.$getCurrentUser();
    }
  };
});

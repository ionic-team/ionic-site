IssueApp.factory('LoginService', function(Firebase, $firebaseSimpleLogin, $rootScope) {
  var firebaseRef = new Firebase('https://issue-template.firebaseio.com');
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
        scope: 'repo',
        rememberMe: true
      }).then(function(user) {
          broadcastStateChange(user);
        }, function(error) {
          console.error('Login failed: ', error);
          //TODO Handle this.
        });
    },
    getUser: function() {
      return loginObj.$getCurrentUser();
    }
  }
});

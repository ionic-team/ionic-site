IssueApp.factory('GitHubService', function($q, $http, util) {
  function convertUrl(url, obj) {
    return util.simpleCompile('https://api.github.com/' + url, obj);
  }

  return {
    getIssue: function(obj) {
      return $http({
        method: 'GET',
        url: convertUrl('repos/{{owner}}/{{repo}}/issues/{{number}}', obj)
      });
    },

    checkUserIsCollaborator: function(owner, repo, user) {
      var deferred = $q.defer();
      var url = convertUrl('repos/{{owner}}/{{repo}}/collaborators/{{user}}', {
        owner: owner,
        repo: repo,
        user: user
      });
      $http({
        method: 'GET',
        url: url
      }).success(function() {
        deferred.resolve(true);
      }).error(function() {
        deferred.resolve(false);
      });
      return deferred.promise;
    },

    submitIssue: function(issue, accessToken, owner, repo) {
      return $http({
        method: 'POST',
        url: convertUrl('repos/{{owner}}/{{repo}}/issues', {
          owner: owner,
          repo: repo
        }),
        params: {
          access_token: accessToken
        },
        data: {
          title: issue.title,
          body: issue.body
        }
      });
    },

    updateIssue: function(issue, accessToken, owner, repo, number) {
      return $http({
        method: 'PATCH',
        url: convertUrl('repos/{{owner}}/{{repo}}/issues/{{number}}', {
          owner: owner,
          repo: repo,
          number: number
        }),
        params: {
          access_token: accessToken
        },
        data: {
          title: issue.title,
          body: issue.body
        }
      });
    }
  }
});

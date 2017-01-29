angular.module('ionicate', [])

.directive('ionicate', function() {
  return {
    restrict: 'E',
    scope: {
      questions: '=',
      onFinish: '&',
      onClose: '&'
    },
    template: '<div class="ionicate-wrap">' +
                '<div class="ionicate-close"><a ng-click="close()"><i class="ion-ios-close"></i></a></div>' +
                '<div class="ionicate-title" ng-if="question">{{question.title}}</div>' +
                '<div class="ionicate-title" ng-if="!question">{{done.title}}</div>' +
                '<div class="ionicate-content">' +
                  '<div class="ionicate-done" ng-if="!question">' +
                    '<div ng-if="!showContact">{{done.text}}</div>' +
                    '<div class="ionicate-contact" ng-if="showContact">' +
                      '<div ng-bind-html="questions.contact.message"></div>' +
                      /*
                      '<div>Are you open to having us contact you about your response?</div>' +
                      '<div class="ionicate-contact-buttons">' +
                        '<a class="ionicate-button" ng-click="onCanContact(true)">Yes</a>' +
                        '<a class="ionicate-button" ng-click="onCanContact(false)">No</a>' +
                      '</div>' +
                      */
                    '</div>' +
                  '</div>' +
                  '<ul class="ionicate-questions" ng-if="question">' +
                    '<li ng-repeat="q in question.options" ng-click="selectOption($event, question, q)">' +
                      '<input type="{{question.type}}" ng-change="optionChanged(question, q)" ng-model="q.$value" value="{{q.$value}}"> {{q.title}}' +
                    '</li>' +
                    '<li ng-if="question.allowOther" ng-click="selectOther($event, question)">' +
                      '<input type="checkbox" ng-model="question.$showOther"> Other' +
                      '<div class="ionicate-other-input"><input type="text" ng-model="question.$otherValue" autofocus ng-if="question.$showOther"></div>' +
                    '</li>' +
                  '</ul>' +
                '</div>' +
                '<div ng-if="question" class="ionicate-submit-button"><a class="ionicate-button" ng-click="submit()">Next</a></div>' +
              '</div>',
    link: function($scope) {
      $scope.results = [];

      $scope.questionIndex = -1;
      $scope.done = $scope.questions && $scope.questions.done;

      $scope.nextQuestion = function() {
        $scope.question = $scope.questions.questions[++$scope.questionIndex];
        if(!$scope.question) {
          var results = $scope.getResults();
          $scope.results = results;
          $scope.showContact = $scope.shouldShowContact(results);

          // Only send the results if we aren't asking them if we can contact them
          $scope.onFinish({
            results: results
          });
        }
      }

      $scope.shouldShowContact = function(results) {
        var ifHasValue = $scope.questions.contact && $scope.questions.contact.ifHasValue;

        if(!Array.isArray(ifHasValue)) {
          ifHasValue = [ifHasValue];
        }

        for(var ifv = 0 ; ifv < ifHasValue.length; ifv++) {
          var path = ifHasValue[ifv];
          var parts = path.split('.');
          var r, q;
          var pi = 0;
          for(var k in results) {
            r = results[k];
            // Check if the result tag matches
            if(k == parts[pi]) {
              pi++;
            }
            for(var j = 0; j < r.length; j++) {
              q = r[j];
              if(q.tag == parts[pi]) {
                pi++;
              }
            }
          }

          // Matched all the paths?
          if(pi == parts.length) {
            // Greedy, return true as soon as we find a match
            return true;
          }
        }
        return false;
      }

      $scope.getResults = function() {
        var qs = $scope.questions && $scope.questions.questions;
        if(!qs) { return {}; }

        var results = {};

        for(var i = 0; i < qs.length; i++) {
          var q = qs[i];
          var opts = q.options;
          var o;
          var qResults = [];
          for(var j = 0; j < opts.length; j++) {
            o = opts[j];
            if(o.$value) {
              qResults.push({
                title: o.title,
                tag: o.tag,
                value: o.$value
              });
            }
          }

          if(q.$otherValue) {
            qResults.push({
              title: 'Other',
              tag: 'other',
              value: q.$otherValue
            });
          }

          if(qResults.length) {
            results[q.tag] = qResults;
          }
        }


        return results;
      }

      $scope.nextQuestion();

      $scope.onCanContact = function(contact) {
        if(contact) {
          $scope.results.can_contact = true;
        }
        $scope.onFinish({
          results: $scope.results
        });
        $scope.showContact = false;
      };

      $scope.selectOther = function(e, question) {
        // Let input do it's thang
        if(e.target.nodeName == "INPUT") { return; }

        question.$showOther = !!!question.$showOther;
      };
      $scope.selectOption = function(e, question, q) {
        // Let input do it's thang
        if(e.target.nodeName == "INPUT") { return; }
        q.$value = !!!q.$value;

        $scope.checkLimit(question, q);
      };
      $scope.optionChanged = function(question, q) {
        $scope.checkLimit(question, q);
      };
      $scope.checkLimit = function(question, q) {
        var limit = question.limit || 99999;
        var q1;
        var selected = 0;
        for(var i = 0; i < question.options.length; i++) {
          q1 = question.options[i];
          if(q1.$value) {
            selected++;
          }
          // Have we already selected too many
          if(selected > limit) {
            var q2;
            for(var j = 0; j < question.options.length; j++) {
              q2 = question.options[j];
              if(q2 !== q) {
                q2.$value = false;
              }
            }
            return;
          }
        }
      }

      $scope.close = function() {
        $scope.onClose();
      }

      $scope.submit = function() {
        $scope.nextQuestion();
      }
    }
  }
})

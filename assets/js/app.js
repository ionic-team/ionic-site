var IonicSiteModule = angular.module('IonicSite',
  ['ngAnimate', 'ngSanitize', 'ngCookies'])

.run(['$rootScope', function($rootScope) {
  $rootScope.surveyQuestions = {
    cover: {
      title: 'Help make Ionic better!',
      content: 'We\'ve got 3 quick questions to help us better understand ' +
               'your needs'
    },
    questions: [
      {
        title: 'What kind of developer are you?',
        tag: 'aboutyourself',
        options: [
          {title: 'Novice Developer', tag: 'novice', value: 'novice-dev'},
          {title: 'Expert Developer', tag: 'expert', value: 'expert-dev'},
          {title: 'Designer', tag: 'designer', value: 'designer'},
          {title: 'Product Manager', tag: 'pm', value: 'pm'},
          {title: 'Student', tag: 'student', value: 'student'},
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'What are you building?',
        tag: 'whatyoucreate',
        options: [
          {
            title: 'An app for my company',
            tag: 'appforcompany',
            value: 'for-company'
          },
          {
            title: 'A personal project',
            tag: 'appforpersonal',
            value: 'for-personal'
          },
          {
            title: 'An app for a client',
            tag: 'appforclient',
            value: 'for-client'
          },
          {
            title: 'An app for school',
            tag: 'appforschool',
            value: 'for-school'
          },
          {
            title: 'I\'m just evaluating',
            tag: 'appfornothing',
            value: 'for-nothing'
          },
        ],
        type: 'checkbox',
        allowOther: true
      },
      {
        title: 'How large is your Employer?',
        tag: 'howlargeco',
        options: [
          {title: 'Self-employed', tag: '1', value: '1'},
          {title: '2-10', tag: '2-10', value: '2-10'},
          {title: '11-50', tag: '11-50', value: '11-50'},
          {title: '51-500', tag: '51-500', value: '51-500'},
          {title: '500+', tag: '500-', value: '500-'}
        ],
        type: 'checkbox',
        limit: 1
      }
    ],
    done: {
      title: 'Thanks!',
      text: 'Keep building awesome apps 🎉'
    },
    contact: {
      ifHasValue: ['howlargeco.2-10', 'howlargeco.11-50', 'howlargeco.51-500',
                   'howlargeco.500-'],
      title: 'Time to chat?',
      message: 'We\'re finalizing our premium product lineup. Can our product' +
        ' team speak with you live for feedback? Please <a href=\"https://' +
        'calendly.com/ionic-research/ionic-pkg-research-v1/02-02-2017\" ' +
        'target=\"_blank\">choose a time here</a>.'
    }
  };
}]);

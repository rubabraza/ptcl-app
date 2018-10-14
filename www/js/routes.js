angular.module('starter.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {


 $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('login', {
            url: "/login",
            templateUrl: "templates/login.html"
        })

  .state('app.editprofile', {
    url: '/editprofile',
    views: {
      'menuContent': {
        templateUrl: 'templates/editprofile.html'
      }
    }
  })

   .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

    .state('app.level', {
    url: '/level',
    views: {
      'menuContent': {
        templateUrl: 'templates/nextlevel.html'
      }
    }
  })

    .state('app.ourstory', {
    url: '/ourstory',
    views: {
      'menuContent': {
        templateUrl: 'templates/ourstory.html'
      }
    }
  })


    .state('app.vision', {
    url: '/vision',
    views: {
      'menuContent': {
        templateUrl: 'templates/vision.html'
      }
    }
  })


.state('app.topteam', {
    url: '/topteam',
    views: {
      'menuContent': {
        templateUrl: 'templates/topteam.html'
      }
    }
  })


.state('app.halloffame', {
    url: '/halloffame',
    views: {
      'menuContent': {
        templateUrl: 'templates/halloffame.html'
      }
    }
  })

.state('app.quizes', {
    url: '/quizes',
    views: {
      'menuContent': {
        templateUrl: 'templates/quizes.html'
      }
    }
  })

.state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifications.html'
      }
    }
  })

.state('app.activity', {
    url: '/activity',
    views: {
      'menuContent': {
        templateUrl: 'templates/activity.html'
      }
    }
  })


.state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html'
      }
    }
  })

 .state('app.quizList', {
    url: '/quizzes',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz_list.html'
      }
    }
  })

 .state('quiz', {
    url: '/quiz',
    templateUrl: 'templates/quiz.html'
  })

  // .state('level', {
  //           url: "/level",
  //           templateUrl: "templates/nextlevel.html"
  //       })

  .state('sign-in', {
            url: "/sign-in",
            templateUrl: "templates/sign-in.html"
        })


  .state('sign-up-one', {
            url: "/sign-up-one",
            templateUrl: "templates/sign-up-one.html"
        })

 .state('sign-up-two', {
            url: "/sign-up-two",
            templateUrl: "templates/sign-up-two.html"
        })

 .state('sign-up-three', {
            url: "/sign-up-three",
            templateUrl: "templates/sign-up-three.html"
        })


.state('recognize', {
            url: "/recognize",
            templateUrl: "templates/recognize.html"
        })


    

     .state('app.recognize_list', {
    url: '/recognize_list',
    views: {
      'menuContent': {
        templateUrl: 'templates/recognize_list.html'
      }
    }
  })


 .state('app.breach', {
    url: '/breach',
    views: {
      'menuContent': {
        templateUrl: 'templates/breach.html'
      }
    }
  })

 .state('app.calendar', {
    url: '/calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/calendar.html'
      }
    }
  })

    $urlRouterProvider.otherwise('/sign-in');
   //  $urlRouterProvider.otherwise('/app/home');


 

});
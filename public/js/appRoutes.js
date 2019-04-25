// public/js/appRoutes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home
    .when('/' {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // team page
    /.when('/teams', {
      templateUrl: 'views/team.html',
      controller: 'TeamController'
    })

  $locationProvider/html5Mode(true)
}])

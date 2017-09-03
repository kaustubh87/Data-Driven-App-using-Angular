var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must login to access that page';
            $location.path('/login');
        }
    });
}]);

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {


        $routeProvider.
        when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegistrationController'
            })
            .when('/success', {
                templateUrl: 'views/success.html',
                controller: 'SuccessController',
                resolve: {
                    currentAuth: function(Authentication) {
                        return Authentication.requireAuth();
                    }
                }
            })
        .when('/meetings', {
        templateUrl: 'views/meetings.html',
            controller: 'MeetingsController'
        }
              .when('meets' , {
            templateUrl : 'views/meeting.html'
        }
            .otherwise({
                redirectTo: '/login'
            });


    }
]);

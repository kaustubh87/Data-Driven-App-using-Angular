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
            .when('/meetings', {
                templateUrl: 'views/meetings.html',
                controller: 'MeetingsController',
                resolve: {
                    currentAuth: function(Authentication) {
                        return Authentication.requireAuth();
                    }
                }
            })
            .otherwise({
                redirectTo: '/login'
            });


    }
]);
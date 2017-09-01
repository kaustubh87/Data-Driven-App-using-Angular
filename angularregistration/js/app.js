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

        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/login', {
                templateUrl: '../../angularregistration/views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: '../../angularregistration/views/register.html',
                controller: 'RegistrationController'
            })
            .when('/success', {
                templateUrl: '../../angularregistration/views/success.html',
                controller: 'SuccessController',
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
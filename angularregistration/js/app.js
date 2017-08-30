var myApp = angular.module('myApp', ['ngRoute']);

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
                controller: 'SuccessController'
            })
            .otherwise({
                redirectTo: '/login'
            });


    }
]);
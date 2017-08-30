var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
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
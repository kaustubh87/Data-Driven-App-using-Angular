myApp.controller('RegistrationController', ['$scope', 'Authentication', function($scope, Authentication) {

    $scope.register = function() {
        /* Registering users into firebase */

        Authentication.register($scope.user);
    };

    $scope.logout = function() {
        Authentication.logout();
    };

}]);
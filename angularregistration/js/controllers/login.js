myApp.controller('LoginController', ['$scope', 'Authentication', function($scope, Authentication) {

    $scope.login = function() {

        Authentication.login($scope.user);

    };
}]);
myApp.controller('LoginController', ['$scope', function($scope) {


    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email;
    };
}]);
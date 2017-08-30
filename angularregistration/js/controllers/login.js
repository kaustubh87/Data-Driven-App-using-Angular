myApp.controller('LoginController', ['$scope', '$firebase', '$firebaseAuth', function($scope, $firebase, $firebaseAuth) {



    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email;
    };
}]);
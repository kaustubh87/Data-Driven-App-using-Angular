myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$location', function($rootScope, $firebaseAuth, $location) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    return {
        login: function(user) {
            auth.$signInWithEmailAndPassword(user.email, user.password)
                .then(function(user) {
                    $location.path('/success')
                }).catch(function(error) {
                    $rootScope.message = error.message;
                });
        },
        register: function(user) {
            auth.$createUserWithEmailAndPassword(
                user.email,
                user.password
            ).then(function(regUser) {
                var regRef = ref.child('users')
                    .child(regUser.uid).set({
                        date: firebase.database.ServerValue.TIMESTAMP,
                        regUser: regUser.uid,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    });
                $rootScope.message = "Hi " + $rootScope.user.firstname + ' ' + " Thanks for registering";
            }).catch(function(error) {
                $rootScope.message = error.message;
            });
        }
    };

}]);
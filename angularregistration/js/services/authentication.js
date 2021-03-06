myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$location', '$firebaseObject', function($rootScope, $firebaseAuth, $location, $firebaseObject) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
        if (authUser) {
            var userRef = ref.child('users').child(authUser.uid);
            var userObj = $firebaseObject(userRef);
            $rootScope.currentUser = userObj;
        } else {
            $rootScope.currentUser = '';
        }
    });

    return {
        login: function(user) {
            auth.$signInWithEmailAndPassword(user.email, user.password)
                .then(function(user) {
                    $location.path('/meetings')
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
        }, //Register
        logout: function() {
            return auth.$signOut();
        }, //Logout
        requireAuth: function() {
                return auth.$requireSignIn();
            } //Require Authentication
    };

}]);
myApp.controller('MeetingsController', ['$scope', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseAuth, $firebaseArray) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) { //if Authentication changes such as login or logout
        if (authUser) {
            var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
            var meetingsInfo = $firebaseArray(meetingsRef);

            $scope.meetings = meetingsInfo;
            $scope.addMeeting = function() {
                meetingsInfo.$add({
                    name: $scope.meetingname,
                    date: firebase.database.ServerValue.TIMESTAMP
                }).then(function() {
                    $scope.meetingname = '';
                });
            }
        }
    });

}]);
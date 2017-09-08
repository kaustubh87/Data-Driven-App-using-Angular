myApp.controller('MeetingsController', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', function($scope, $rootScope, $firebaseAuth, $firebaseArray) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) { //if Authentication changes such as login or logout
        if (authUser) {
            var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
            var meetingsInfo = $firebaseArray(meetingsRef);

            $scope.meetings = meetingsInfo;

            meetingsInfo.$loaded().then(function(data) {
                $rootScope.howManyMeetings = meetingsInfo.length;
            });

            meetingsInfo.$watch(function(data) {
                $rootScope.howManyMeetings = meetingsInfo.length;
            });


            $scope.addMeeting = function() {
                    meetingsInfo.$add({
                        name: $scope.meetingname,
                        date: firebase.database.ServerValue.TIMESTAMP
                    }).then(function() {
                        $scope.meetingname = '';
                    });
                }
                //Deleting a meeting
            $scope.deleteMeeting = function(key) {
                meetingsInfo.$remove(key);
            }
        }
    });

}]);
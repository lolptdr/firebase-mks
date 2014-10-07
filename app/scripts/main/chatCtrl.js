'use strict';

angular.module('myApp').controller('ChatCtrl', function($scope, $firebase, $firebaseSimpleLogin) {
  var ref = new Firebase('https://shining-fire-2267.firebaseio.com/chat');
  var sync = $firebase(ref);
  // create a synchronized array for use in our HTML code
  $scope.messages = sync.$asArray();

  function Message(text) {
    this.text = text;
  }

  $scope.addMessage = function(text) {
    $scope.tab = 0;
    $scope.messages.$add(new Message(text));
    $scope.newMessageText = '';
  };

  $scope.auth = $firebaseSimpleLogin(ref);

  $scope.signIn = function() {
    $scope.auth.$login('password', {
      email: $scope.email,
      password: $scope.password
    }).then(function(user) {
      console.log('user', user);
    }, function(error) {
      console.log('error', error);
    });
  };

  $scope.signUp = function() {
    $scope.auth.$createUser($scope.email, $scope.password
    ).then(function(user) {
      console.log('user', user);
    }, function(error) {
      console.log('error', error);
    });
  };
  
});
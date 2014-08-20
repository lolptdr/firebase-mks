'use strict';

angular.module('myApp').controller('MainCtrl', function($scope, $firebase) {
  var ref = new Firebase('https://shining-fire-2267.firebaseio.com/data');
  var sync = $firebase(ref);
  // create a synchronized array for use in our HTML code
  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
  };
});
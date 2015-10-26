angular.module('tinderCards.controllers', [])

.controller('MainCtrl', function($scope, Cards){
  var promise = Cards.get();
  promise.then(function(obj){
    $scope.cards = obj.data;
  });
});

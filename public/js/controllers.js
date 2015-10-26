angular.module('tinderCards.controllers', ['tinderCards.services'])

.controller('MainCtrl', function($scope, Cards){
  var promise = Cards.get();
  promise.then(function(obj){
    $scope.cards = obj.data;
  });

  
});

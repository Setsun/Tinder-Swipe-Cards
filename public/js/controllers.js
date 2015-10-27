angular.module('tinder.controllers', ['tinder.services'])

.controller('MainCtrl', function($scope, Cards) {
  $scope.cards = [];

  $scope.user = {
    name: 'Match',
    image: 'img/match.jpg'
  };

  $scope.$on('Liked', function(event, args) {
    $scope.$apply(function(){
      $scope.match = {
        name: args.card.name,
        image: args.card.image
      };
    });
  });

  $scope.destroyCard = function(isLike) {
    var card = $scope.cards.shift();

    if (isLike) {
      $scope.$broadcast('Liked', {card: card});
    }
  };

  $scope.getCards = function() {
    var promise = Cards.get();
    promise.then(function(obj){
      $scope.cards = obj.data;
    });
  };

  $scope.getCards();
});

angular.module('tinderCards.controllers', ['tinderCards.services'])

.controller('CardCtrl', function($scope, Cards) {
  var promise = Cards.get();
  promise.then(function(obj){
    $scope.cards = obj.data;
  });

  $scope.destroyCard = function(index, isLike){
    if (isLike) {
      var card = $scope.cards.shift();
      $scope.$broadcast('Liked', {card: card});
    }
  };

})

.controller('MatchCtrl', function($scope) {
  $scope.$on('Liked', function(event, args) {
    $scope.likedName = args.card.name;
    $scope.likedPicture = args.card.image;
  });
});

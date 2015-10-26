angular.module('tinderCards.services', [])

.factory('Cards', function($http){
  return {
    get: function() {
      return $http.get('/cards');
    }
  }
});

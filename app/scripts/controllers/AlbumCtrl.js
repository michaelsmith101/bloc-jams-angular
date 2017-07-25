(function() {
    angular
      .module('blocJams')
      .controller('AlbumCtrl', ["$scope", 'Fixtures', function($scope, Fixtures){
           $scope.albumData = Fixtures.getAlbum();
      }]);
  })();

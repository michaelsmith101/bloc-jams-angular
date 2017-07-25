(function() {

    angular
      .module('blocJams')
      .controller('AlbumCtrl', ["$scope", 'Fixtures', 'SongPlayer', function($scope, Fixtures, SongPlayer){
           $scope.albumData = Fixtures.getAlbum();
           $scope.songPlayer = SongPlayer;
      }]);
  })();

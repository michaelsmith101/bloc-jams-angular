(function() {


  angular
    .module('blocJams')
    .controller('AlbumCtrl', ["$scope", 'Fixtures', function($scope){
      $scope.albumData = Fixtures.getAlbum();

    }]);
})();

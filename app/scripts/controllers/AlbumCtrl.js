(function() {

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ["$scope", function($scope){
      $scope.albumData = albumPicasso
    }]);
})();

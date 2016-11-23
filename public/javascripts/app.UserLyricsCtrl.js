angular.module('lyricalApp')
    .controller('UserLyricsCtrl', function($scope, $http, $routeParams, $rootScope) {

       
    $scope.userlyrics = []
    $scope.fetch = function() {
        var id = $rootScope.key;


        $http.get('http://localhost:9292/userlyrics/users/' + id).success(function(results) {
            console.log($routeParams);
            console.log(results);
            $scope.userlyrics = results;
            console.log(results);

            // 1. get user id
                      // 2. loop through results
            // 3. if results .user_id == id
            // 4. push to $scope.userLyrics

        }).error(function(err) {
            console.log(err);
        });
    }

    $scope.fetch()

});

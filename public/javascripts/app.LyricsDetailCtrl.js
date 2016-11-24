angular.module('lyricalApp')
    .controller('LyricsDetailCtrl', function($scope, $http, $routeParams, $rootScope) {

       
    $scope.lyrics = ""
    $scope.fetch = function() {

        $http.get('http://localhost:9292/dashboard/' + $routeParams.id).success(function(results) {
            console.log($routeParams);
            console.log(results);
            $scope.lyrics = results;
            console.log(results);

        }).error(function(err) {
            console.log(err);
        });
    }

    $scope.fetch()

    $scope.saveToLyricsDatabase = function() {
        var uid = $rootScope.key;
        console.log(uid);
        console.log('this is happeninggg')
        console.log($routeParams.id, ' this is route params')
        console.log($rootScope, ' this is rootscope')
         $http({
             url: 'http://localhost:9292/userlyrics/savelyrics',
             method: 'POST',
             params: { song_id: $routeParams.id, user_id: $rootScope.key}
         }).success(function(results) {
             console.log(results);
                 // $scope.changetoRoute();
            console.log('Success');
         }).error(function(err) {
             console.log('There was an error');
             console.log(err);
         })

     }
});














angular.module('lyricalApp')
    .controller('LyricsDetailCtrl', function($scope, $http, $routeParams) {

       
    $scope.lyrics = [];
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


});


    
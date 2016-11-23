angular.module('lyricalApp')
    .controller('LyricCreateCtrl', function($scope, $http, $location, $rootScope) {



        $scope.createLyric = function(artist, song, lyrics, year, genre, image, user_id) {
            $http({
                url: 'http://localhost:9292/dashboard/createlyrics',
                method: 'POST',
                params: { artist: artist, song: song, lyrics: lyrics, year: year, genre: genre, image: image, user_id: user_id }
            }).success(function(results) {
                console.log(results);
                    // $scope.changetoRoute();
                console.log('Success');
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            });
        };

    });
angular.module('lyricalApp')
    .controller('DashboardCtrl', function($scope, $http, $location) {

    $scope.goToLyric = function(id) {
    		console.log('is this working')
            $location.path('/' + id);
    };	

    $scope.goToLogout = function(id) {
            
        $location.path('/');
    };  


        $scope.lyrics = [];
        $scope.fetch = function() {
            $http.get('http://localhost:9292/dashboard').success(function(results) {
                $scope.lyrics = results;

            }).error(function(err) {
                console.log(err);
            });

        }

$scope.sortField = 'artist';
$scope.sortField = 'song';
$scope.sortField = 'id';



$scope.fetch()


});


    
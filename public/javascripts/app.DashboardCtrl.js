angular.module('lyricalApp')
    .controller('DashboardCtrl', function($scope, $http) {

        $scope.lyrics = [];
        $scope.fetch = function() {
            $http.get('http://localhost:9292/dashboard').success(function(results) {
                $scope.lyrics = results;
            }).error(function(err) {
                console.log(err);
            });
        }

$scope.fetch()

});
    
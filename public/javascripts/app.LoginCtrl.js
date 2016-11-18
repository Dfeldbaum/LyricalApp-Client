angular.module('lyricalApp')
    .controller('LoginCtrl', function($scope, $http, $location) {

        $scope.changetoLoginRoute = function() {
            $location.path('/dashboard');
        }


        $scope.changetoRegisterRoute = function() {
            $location.path('/register');
        }


        $scope.loginToDashboard = function(username, password) {
            $http({
                url: 'http://localhost:9292/account/login',
                method: 'POST',
                params: { username: username, password: password }
            }).success(function(results) {
                console.log(results);
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            });
        };

    });

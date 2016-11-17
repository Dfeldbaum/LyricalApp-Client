angular.module('lyricalApp')
    .controller('AccountCreateCtrl', function($scope, $http) {


        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://localhost:9292/account/register',
                method: 'POST',
                params: { username: username, email: email, password: password }
            }).success(function(results) {
                console.log(results);
               $window.location.host = '/dashboard'
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            });
        };

    });
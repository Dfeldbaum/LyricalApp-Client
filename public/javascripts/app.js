angular.module('lyricalApp', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        })

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/register', {
                templateUrl: 'ngViews/account.html',
                controller: 'AccountCreateCtrl'
            });


        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);
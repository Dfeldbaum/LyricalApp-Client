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
                templateUrl: 'ngViews/login.html',
                controller: 'LoginCtrl'
            })        
            .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'AccountCreateCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'ngViews/dashboard.html',
                controller: 'DashboardCtrl'
            });


        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);
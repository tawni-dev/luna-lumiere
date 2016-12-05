var lunaLumiere = angular.module('lunaLumiere', ['ui.router']);

lunaLumiere.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
            url: '/',
            templateUrl: 'views/home/homeTempl.html',
            controller: 'homeCtrl'
        })
    .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop/shop.html',
            controller: 'shopCtrl'
        })
    .state('about', {
            url: '/about',
            templateUrl: 'views/about/about.html'
    })
});

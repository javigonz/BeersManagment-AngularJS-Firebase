
  'use strict';


  angular
      .module('beersManagmentApp', ['ngRoute' ,'ngResource', 'beersManagmentApp.filters'])
      .config(config)


  function config ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
          controller: 'MainCtrl',
          templateUrl: '/app/views/main.html'
        })
        .when('/addBeer', {
          controller: 'AddBeerCtrl',
          templateUrl: '/app/views/addBeer.html'
        })
        .otherwise ({ redirectTo: '/'});

  };





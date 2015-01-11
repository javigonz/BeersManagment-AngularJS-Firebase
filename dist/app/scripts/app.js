
  'use strict';


  angular
      .module('beersManagmentApp', ['ngRoute' ,'ngResource', 'beersManagmentApp.filters', 'firebase'])
      .config(config)


  function config ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
          controller: 'MainCtrl',
          templateUrl: 'AgileDevelopment_angularjs_firebase/app/views/main.html'
        })
        .when('/addBeer', {
          controller: 'AddBeerCtrl',
          templateUrl: 'AgileDevelopment_angularjs_firebase/app/views/addBeer.html'
        })
        .otherwise ({ redirectTo: '/'});

  };





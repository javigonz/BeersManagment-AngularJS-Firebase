
  'use strict';


  angular
      .module('beersManagmentApp', ['ngRoute' ,'ngResource', 'beersManagmentApp.filters', 'firebase'])
      .config(config)


  function config ($locationProvider, $routeProvider, $controllerProvider) {

    //With angular 1.3 you can no longer use global controller declaration on the global scope. You would need to define the controller using inline declaration.
    $controllerProvider.allowGlobals(); 

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

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





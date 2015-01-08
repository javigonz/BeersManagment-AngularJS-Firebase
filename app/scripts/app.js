
  'use strict';


  angular
      .module('beersManagmentApp', ['ngRoute' ,'ngResource'])
      .config(config);


  function config ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
          controller: '/controllers/main2',
          templateUrl: '/app/views/main.html'
        });

  };



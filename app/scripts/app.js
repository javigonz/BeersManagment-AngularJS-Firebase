
  'use strict';


  angular
      .module('beersManagmentApp', ['ngRoute' ,'ngResource'])
      .config(config)


  function config ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
          controller: 'MainCtrl',
          templateUrl: '/app/views/main.html'
        });

  };





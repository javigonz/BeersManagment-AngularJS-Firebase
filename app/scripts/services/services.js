'use strict';


angular
    .module('beersManagmentApp.services', ['firebase'])
    .factory('BeersFactory', BeersFactory);

function BeersFactory($firebase){

    var refBeers = new Firebase('https://beers-managment.firebaseio.com/beers');

    return $firebase(refBeers).$asArray();

  };




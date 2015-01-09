'use strict';


angular
    .module('beersManagmentApp.services', [])
    .factory('BeersFactory', BeersFactory)
    .factory('SetBeer', SetBeer)
    .factory('GetBeer', GetBeer);

function BeersFactory(){

    return [
              {
                name: 'Lefte', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Judas', country: 'Germany', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'IronMaiden', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Santi Claus', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Carlos V', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Faro Limon', country: 'Portugal', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Delirium Tremen', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              },
              {
                name: 'Delirium Nocturne', country: 'Belgium', type: 'Blonde', brewed: 'Jhon & Sons'
              }
            ];
  }

  function SetBeer ($scope, beers){

    $scope.beers = beers;

  }

  function GetBeer ($scope){

    return $scope.beers;

  };

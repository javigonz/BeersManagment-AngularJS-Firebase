"use strict";function MainCtrl($scope,$firebase){$scope.beers=BeersFactory($firebase),$scope.orderByName=function(order){$scope.orderSelector=order},$scope.removeBeer=function(beer){$scope.beers.$remove(beer)}}function AddBeerCtrl($scope,$firebase,$location){$scope.beers=BeersFactory($firebase),$scope.insertNewBeer=function(beer){$scope.beers.$add(beer),$location.url("/")}}angular.module("beersManagmentApp.controller",["beersManagmentApp.services","firebase"]).controller("MainCtrl",MainCtrl).controller("AddBeerCtrl",AddBeerCtrl);
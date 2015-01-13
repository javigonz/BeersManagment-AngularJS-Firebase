'use strict';

/**
 * @ngdoc function
 * @name beersManagmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beersManagmentApp
 */

angular
	.module('beersManagmentApp.controller', ['beersManagmentApp.services', 'firebase'])
    .controller('MainCtrl', MainCtrl)
	.controller('AddBeerCtrl', AddBeerCtrl);
    

function MainCtrl($scope, $firebase){

	$scope.beers = BeersFactory($firebase); //Factory fetch

	//Filter to order colum by name
	$scope.orderByName = function (order){

		$scope.orderSelector = order;
	}

	$scope.removeBeer = function (beer){

		$scope.beers.$remove(beer);
	}



}

function AddBeerCtrl($scope, $firebase, $location){

	$scope.beers = BeersFactory($firebase); //Factory fetch

	//Method Insert New Beer
	$scope.insertNewBeer = function(beer)
	{
		$scope.beers.$add(beer);

		$location.url('/');

	}

};



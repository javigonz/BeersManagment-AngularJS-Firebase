'use strict';

/**
 * @ngdoc function
 * @name beersManagmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beersManagmentApp
 */
angular
	.module('beersManagmentApp.controller', ['beersManagmentApp.services'])
    .controller('MainCtrl', MainCtrl)
    .controller('AddBeerCtrl', AddBeerCtrl);
    

function MainCtrl($scope){

	$scope.beers = BeersFactory(); //Factory fetch
	SetBeer($scope.beers);
	

	$scope.orderByName = function (order){

		$scope.orderSelector = order;
	} 

}

function AddBeerCtrl($scope){


	$scope.insertNewBeer = function()
    {

    	GetBeer().push($scope.newBeer);

    }
	

};



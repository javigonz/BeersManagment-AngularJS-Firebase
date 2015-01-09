'use strict';

/**
 * @ngdoc function
 * @name beersManagmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beersManagmentApp
 */
angular
	.module('beersManagmentApp.controller', [])
    .controller('MainCtrl', MainCtrl)
    .controller('AddBeerCtrl', AddBeerCtrl);
    

function MainCtrl($scope){

	$scope.beers = BeersFactory(); //Factory fetch
	

	$scope.orderByName = function (order){

		$scope.orderSelector = order;
	} 

}

function AddBeerCtrl($scope){

	

};



'use strict';


angular
    .module('beersManagmentApp.filters', [])
    .filter('FilterBrewed', FilterBrewed);



function FilterBrewed(){

	return function (brewed){
		return '[' + brewed + ']';
	}

}; 


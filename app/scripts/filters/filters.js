'use strict';


angular
    .module('beersManagmentApp',[])
    .filter('FilterBrewed', FilterBrewed);



function FilterBrewed(){

	return function (brewed){
		return '[' + brewed + ']';
	}

}; 


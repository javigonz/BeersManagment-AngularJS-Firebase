describe ('Show Filters works fine', function() {
	
	beforeEach(module('beersManagmentApp'));

	var myFilter;

	beforeEach(inject(function($filter) {
		myFilter = $filter('FilterBrewed');
	}))

	it ("myFilter: must be ...", function(){
		var brewed = 'Brewed & Sons'
		expect(myFilter(brewed)).toBe('[Brewed & Sons]');
	})
});


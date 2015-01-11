describe ('Show Services works fine', function() {
	
	beforeEach(module('beersManagmentApp.services'));

	beforeEach(module(function ($provide) {
	    $provide.value('BeersFactory', {
	        someVariable: 1
	    });
	  }));

	  it('can get an instance of my factory', inject(function(BeersFactory) {
		  expect(BeersFactory).toBeDefined();
	      expect(BeersFactory).not.toBe(null);
		  expect('https://beers-managment.firebaseio.com/beers').toMatch(/^https:\/\/[a-zA-Z0-9_-]+\.firebaseio\.com/i);
	  }));

	 /* it('should have a valid FirebaseURL', inject(function(refBeers) {
		  expect(refBeers).toMatch(/^https:\/\/[a-zA-Z0-9_-]+\.firebaseio\.com$/i);
	  }));*/
});


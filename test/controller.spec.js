describe ('Show Controllers works fine', function() {

	beforeEach(angular.mock.inject(function ($controller, $rootScope, $firebase) {
	    scope = $rootScope.$new();
	    $controller(MainCtrl, {
	      $scope: scope
	    });
	  }));

	it('should call BeersFactory', function () {
	    expect(scope.beers).not.toBe(null);
	});

	it('should call orderByName', function () {
		//expect(scope.orderByName).toBeA('function');
	    expect(scope.orderByName).toBeDefined();
	});

	it('should call removeBeer', function () {
		expect(scope.removeBeer).toBeDefined();
	});

	
});





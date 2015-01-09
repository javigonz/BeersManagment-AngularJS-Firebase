describe ('Show Controllers works fine', function() {
	
	beforeEach(inject(function ($controller, $rootScope) {
	    scope = $rootScope.$new();
	    $controller(MainCtrl, {
	      $scope: scope
	    });
	  }));

	it('should call BeersFactory', function () {
	    expect(scope.beers).not.toBe(null);
	});

	it('should call BeersFactory', function () {
	    expect(scope.orderByName).toBeDefined();
	});

	
});


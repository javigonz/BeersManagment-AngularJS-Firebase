describe ('Show Controllers works fine', function() {

	beforeEach(module('beersManagmentApp.controller', 'firebase'));

	var $firebase, scope, ctrl;

	beforeEach(inject(function ($controller, $rootScope, _$firebase_) {
	    scope = $rootScope.$new();
	    $firebase = _$firebase_;

	    ctrl = $controller(MainCtrl, {$scope: scope});

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





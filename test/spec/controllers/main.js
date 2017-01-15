'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('isunlockedApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('first test', function() {
   it('first test', function() {
     expect(1).toEqual(1);
   });
  });
});

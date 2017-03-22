'use strict';

describe('Controller: McexCtrl', function () {

  // load the controller's module
  beforeEach(module('ang1App'));

  var McexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    McexCtrl = $controller('McexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(McexCtrl.awesomeThings.length).toBe(3);
  });
});

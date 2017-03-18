'use strict';

describe('Controller: MappageCtrl', function () {

  // load the controller's module
  beforeEach(module('ang1App'));

  var MappageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MappageCtrl = $controller('MappageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MappageCtrl.awesomeThings.length).toBe(3);
  });
});

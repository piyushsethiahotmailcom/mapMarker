'use strict';

describe('Controller: MembersCtrl', function () {

  // load the controller's module
  beforeEach(module('ang1App'));

  var MembersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembersCtrl = $controller('MembersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembersCtrl.awesomeThings.length).toBe(3);
  });
});

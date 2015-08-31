'use strict';

describe('Directive: fbPage', function () {

  // load the directive's module
  beforeEach(module('demolayAbApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-page></fb-page>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fbPage directive');
  }));
});

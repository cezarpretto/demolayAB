'use strict';

describe('Service: ModelSevice', function () {

  // load the service's module
  beforeEach(module('demolayAbApp'));

  // instantiate service
  var ModelSevice;
  beforeEach(inject(function (_ModelSevice_) {
    ModelSevice = _ModelSevice_;
  }));

  it('should do something', function () {
    expect(!!ModelSevice).toBe(true);
  });

});

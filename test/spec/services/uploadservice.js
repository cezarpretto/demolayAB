'use strict';

describe('Service: UploadService', function () {

  // load the service's module
  beforeEach(module('demolayAbApp'));

  // instantiate service
  var UploadService;
  beforeEach(inject(function (_UploadService_) {
    UploadService = _UploadService_;
  }));

  it('should do something', function () {
    expect(!!UploadService).toBe(true);
  });

});

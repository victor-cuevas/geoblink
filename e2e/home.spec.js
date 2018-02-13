'use strict';

describe('The main view', function () {
  var singleStateSelect = element(by.id('single-button')),
    multiStateSelect = element(by.id('multiple-button'));
  beforeEach(function () {
    browser.get('/');
  });

  it('expects elements to be present', function() {
    expect(singleStateSelect.isPresent());
    expect(multiStateSelect.isPresent());
  });

  it('clicks on item and changes selection', function() {
    singleStateSelect.click();
    browser.sleep(5000);
  });

});

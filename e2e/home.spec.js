/* eslint-disable */

'use strict';

describe('The main view', function () {
  var singleStateSelect = element(by.id('single-button')),
    multiStateSelect = element(by.id('multiple-button')),
    singleStateDrop = element(by.tagName('uib-dropdown-menu')),
    multiStateDrop = element(by.className('ui-select-choices')),
    STATES = require('../mock.json');

  beforeAll(function () {
    browser.get('/');
  });

  it('Expects elements to be present', function() {
    expect(singleStateSelect.isPresent());
    expect(multiStateSelect.isPresent());
  });

  it('Clicks on item and changes selection', function() {
    singleStateSelect.click();
    singleStateDrop.all(by.tagName('li')).then(function(options){
      options[0].click();
      expect(singleStateSelect.getText()).toEqual(STATES.states[Object.keys(STATES.states)[0]]);
    });

    multiStateSelect.click().then(function() {
      browser.wait(protractor.ExpectedConditions.presenceOf(element(by.className('ui-select-choices'))), 3000);
      multiStateDrop.all(by.tagName('div')).then(function(){
        browser.actions().sendKeys('Alaska').perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(multiStateSelect.$('span[uis-transclude-append]').getText()).toEqual(STATES.states.AK);
        multiStateSelect.$('span .remove').click();
        expect(multiStateSelect.getText()).toEqual('');
      });
    });
    multiStateSelect.click().then(function() {
      browser.wait(protractor.ExpectedConditions.presenceOf(element(by.className('ui-select-choices'))), 3000);
      multiStateDrop.all(by.tagName('div')).then(function(){
        browser.actions().sendKeys('Io').perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(multiStateSelect.$('span[uis-transclude-append]').getText()).toEqual(STATES.states.IA);
      });
    });
  });
});

/* eslint-disable */
'use strict';

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter({specStarted: function(result) {
      console.log('\n' + result.description);
    }});
  },

  baseUrl: 'http://localhost:3001',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

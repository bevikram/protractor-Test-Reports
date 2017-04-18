'use strict';
var loginInfo = require('./variables').loginInfo

// React Web testing
exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: loginInfo.baseUrl,
  capabilities: {
    browserName: 'chrome'
  },
  maxInstances: 50,
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'phantomjs'
  // }],
  suites: {
    login: ['./specs/login.js'],
    create_customer: ['./specs/createCustomer.js'],
    logout: ['./specs/logout.js']
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    var width = 1425;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
    require('babel-register');
  },
  getPageTimeout: 50000,
  allScriptsTimeout: 50000,
  mochaOpts: {
    enableTimeouts: false,
  }
};
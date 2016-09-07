"use strict";

require("../setup");
const wd = require("wd");
const serverConfigs = require('../appiumServer');

describe("Property", function () {
  this.timeout(30000);
  var driver;
  var allPassed = true;

  before(function () {
    driver = wd.promiseChainRemote(serverConfigs.local);
    const desired = serverConfigs.ios93;
    return driver.init(desired);
  });

  after(function () {
    return driver.quit();
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("load home page", function () {
    return driver
      .elementById('SearchButton')
      .text()
      .then((text) =>{
        text.should.equal("SearchButton");
      });
  });

  it("search property in new york", function () {
    return driver
      .elementById('CityName')
      .then((el) =>{
        return el
          .clear()
          .sendKeys('New york')
          .getValue().should.eventually.equal('New york')
          .elementById('SearchButton')
          .click()
          .sleep(1000);
      })
      .elementByClassName('UIAScrollView')
      .should.eventually.exist;
  });
});
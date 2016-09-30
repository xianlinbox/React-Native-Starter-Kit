require('../setUp');
const wd = require('wd');
const serverConfigs = require('../appiumServer');
const SearchPageCreater = require('../pages/properties/searchPage');
const SearchResultPageCreater = require('../pages/properties/searchResultPage');
const PropertyDetailsPageCreater = require('../pages/properties/propertyDetailsPage');

describe('Property', function () {
  var appiumDriver;
  var PropertyDetailPage;
  var allPassed = true;
  this.timeout(30000);

  before(function () {
    appiumDriver = wd.promiseChainRemote(serverConfigs.local);
    PropertyDetailPage = PropertyDetailsPageCreater(appiumDriver);
    const desired = serverConfigs.ios93;
    return appiumDriver.init(desired);
  });

  after(function () {
    return appiumDriver.quit();
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it('search properties in new york', () => {
    const searchPage = SearchPageCreater(appiumDriver);
    return searchPage
      .fillCityName('New york')
      .getValue().should.eventually.equal('New york')
      .then(() => {
        return searchPage.search()
      })
      .waitForElementById('property0')
      .should.eventually.exist;
  });

  it('select the first property ', () => {
    const SearchResultPage = SearchResultPageCreater(appiumDriver);
    return SearchResultPage
      .clickFirstProperty()
      .waitForElementById('PropertyTitle')
      .should.eventually.exist;
  });

  it('show first property details', () => {
    const PropertyDetailPage = PropertyDetailsPageCreater(appiumDriver);
    return PropertyDetailPage
      .propertyTitle
      .getValue()
      .should.eventually.eql('Castle Dyke Bank, New York, Lincoln');
  });

  it('back to search result page', () => {
    const PropertyDetailPage = PropertyDetailsPageCreater(appiumDriver);
    return PropertyDetailPage
      .back()
      .waitForElementById('property1')
      .should.eventually.exist;
  });

  it('select fifth property details', () => {
    const SearchResultPage = SearchResultPageCreater(appiumDriver);
    return SearchResultPage
      .clickSecondProperty()
      .waitForElementById('PropertyTitle')
      .should.eventually.exist;
  });

  it('show fifth property details', () => {
    const PropertyDetailPage = PropertyDetailsPageCreater(appiumDriver);
    return PropertyDetailPage
      .propertyTitle
      .getValue()
      .should.eventually.eql('Castle Dyke Bank, New York, Lincoln');
  });
});
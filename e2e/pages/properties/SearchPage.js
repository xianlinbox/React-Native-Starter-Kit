module.exports = (appiumDriver) => {
  const cityName = appiumDriver.elementById('CityName');
  const searchButton = appiumDriver.elementById('searchButton');

  return {
    cityName: cityName,
    fillCityName: (city) => {
      return cityName.then((el) => {
        return el.clear().sendKeys(city)
      });
    },
    search: () => {
      return searchButton.click();
    }
  }
};
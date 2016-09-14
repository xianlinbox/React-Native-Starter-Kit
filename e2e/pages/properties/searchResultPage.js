module.exports = (appiumDriver) => {
  const firstProperty = appiumDriver.elementById('property1');
  const secondProperty = appiumDriver.elementById('property5');

  return {
    clickFirstProperty: () => {
      return firstProperty.click();
    },

    clickSecondProperty: () => {
      return secondProperty.click();
    }
  }
};
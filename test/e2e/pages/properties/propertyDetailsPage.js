module.exports = (appiumDriver) => {
  const propertyTitle = appiumDriver.elementById('PropertyTitle');
  const backButton = appiumDriver.elementById('Back');

  return {
    propertyTitle: propertyTitle,
    back: () => {
      return backButton.click();
    }
  }
};
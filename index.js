const {Builder, By, Key, util} = require('selenium-webdriver');

async function chrome(){

    var driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://www.google.com');
    await driver.findElement(By.name("q")).sendKeys("Border Collie",Key.RETURN);
    await driver.findElements(By.className("g"));

}
chrome();

// async function fireFox(){

//     var driver = await new Builder().forBrowser('firefox').build();

//     await driver.get('http://www.google.com');
//     await driver.findElement(By.name("q")).sendKeys("Border Collie",Key.RETURN);
// }
// fireFox();
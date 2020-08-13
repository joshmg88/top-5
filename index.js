const {Builder, By, Key, util, WebElement} = require('selenium-webdriver');

async function chrome(){

    var driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://www.google.com');
    await driver.findElement(By.name("q")).sendKeys("Border Collie",Key.RETURN);
    let elem = driver.findElement(By.id("rso"));
    await console.log(elem);
}
chrome();

// async function fireFox(){

//     var driver = await new Builder().forBrowser('firefox').build();

//     await driver.get('http://www.google.com');
//     await driver.findElement(By.name("q")).sendKeys("Border Collie",Key.RETURN);
// }
// fireFox();
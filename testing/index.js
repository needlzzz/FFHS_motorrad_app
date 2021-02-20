const { Builder, By, Key, until } = require("selenium-webdriver");

async function test1() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("http://127.0.0.1:5500/html/index.html");
  await driver.findElement(By.id("menuRS")).click();
}

test1();

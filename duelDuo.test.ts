import { Builder, Capabilities, By } from "selenium-webdriver";
import { elementTextContains, urlContains } from "selenium-webdriver/lib/until";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://18.118.218.3/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(5000);
});
test("test draw button displays div choices", async () => {
  await driver.findElement(By.id("draw")).click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(5000);
});
test("test clicking 'add to duo' displays div player-duo", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.findElement(By.className("bot-btn")).click();
  const addDuo = await driver.findElement(By.id("player-duo"));
  const displayed = await addDuo.isDisplayed();
  expect(displayed).toBe(true);
   await driver.sleep(5000);
 
});

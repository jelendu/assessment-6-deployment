const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw-button")).click();
    let choicesDiv = await driver.findElement(By.id("choices"));
    expect(choicesDiv).toBeDefined();
  });

  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("add-to-duo-button")).click();
    let playerDuoDiv = await driver.findElement(By.id("player-duo"));
    expect(playerDuoDiv).toBeDefined();
  });
});
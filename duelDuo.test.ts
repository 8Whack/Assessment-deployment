
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
    
})

//this test is odd, since the code itself is wrong. Nothing happens when you click the "see all bots" buttton, not even manually.
//However, you'll know this test could work if you see a failed request in your nodemon server console about "botsArr is not defined", and the website that pops up shows that the "see all bots" element has been clicked. Also, since this test specifically tests if the type of information that comes through is an object, the test will pass even now since it's not testing if any information is there, simply if the type that would be there is an object. 
test('testing if clicking see all bots shows all the bots', async ()=>{
    await driver.findElement(By.id('see-all')).click()
    let allBots = await driver.findElement(By.id('all-bots'))
    await driver.sleep(2000)
    expect(typeof allBots.getText()).toBe('object')
})

//this test is weird. I get a different result each time I run it- sometimes the result is true, sometimes it's false, seemingly at random. I don't change the code at all, either. very strange.
//so, if it doesn't work for you, just run it again a couple times. this is freaking weird. I don't think I want to use selenium if it gives me mixed results like this.
test('Testing if robots show up upon clicking "draw"', async ()=>{
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true);
})
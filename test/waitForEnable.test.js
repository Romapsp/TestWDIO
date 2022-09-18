const { login } = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')


LoginPage = require('../pageobjects/login.page')

describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', async () => {
        await browser.url(`/dynamic_controls`)
        await loginPage.inputEnabledField.waitForDisplayed()
        await loginPage.enableButton.waitForDisplayed()
        await loginPage.enableButton.click()
        await loginPage.inputEnabledField.waitForEnabled()
        await expect(loginPage.inputEnabledField).toBeEnabled()
        await expect(loginPage.enableButton).toHaveAttrContaining('autocomplete','off')
        //browser.debug() Uncomment to test how the debug functionality works
    })
    it('should wait for input field to be disabled', async () => {
        await loginPage.inputEnabledField.waitForDisplayed()
        await loginPage.enableButton.waitForDisplayed()
        await loginPage.enableButton.click()
        await loginPage.inputEnabledField.waitForEnabled({reverse: true})
        await expect(loginPage.inputEnabledField).toBeDisabled()
    })
    it('should have link in page footer', async () => {
        await loginPage.pageFooter.waitForDisplayed()
        await expect(loginPage.pageFooter).toHaveLink('http://elementalselenium.com/')
    })
})
const { default: pause } = require("webdriverio/build/commands/browser/pause")
const { default: dragAndDrop } = require("webdriverio/build/commands/element/dragAndDrop")
const  { clickOnLink, getFigureDetailsText, figureDetails, registerButtonClick, login, copyBtnValue, } = require("../pageobjects/login.page")
const loginPage = require("../pageobjects/login.page")

describe("get flic test suite", () => {
    it("registers at GitFlic", async() => {
        await browser.url('https://gitflic.ru/')
        await loginPage.registerButtonClick()
        await browser.newWindow('https://10minutemail.net/')
        const email = await loginPage.copyBtnValue()
        await browser.switchWindow('GitFlic - [регистрация]')
        await loginPage.usernameInput.click()
        await loginPage.usernameInput.addValue(email)
        await loginPage.emailInput.click()
        await loginPage.emailInput.addValue(email)
        await loginPage.passwordInput.click()
        await loginPage.passwordInput.addValue(email)
        await loginPage.passwordConfirmInput.click()
        await loginPage.passwordConfirmInput.addValue(email)
        await loginPage.clickOnCheckbox(1)
        await loginPage.signUpBtn.click()
        await expect(loginPage.alertText).toHaveText(`На почту ${email} , было выслано письмо. Перейдите по ссылке из письма чтобы подтвердить аккаунт. Если письмо не пришло, то можно`)
    })
    it('shows confirmation email', async() => {
        await browser.closeWindow()
        await browser.switchWindow('10 Minute Mail')
        // await browser.newWindow('https://10minutemail.net/')
        // await browser.pause(30000)
        await loginPage.refreshBtn.click()
        await browser.pause(300)
        await loginPage.closeBtn.click({x:100})
        await loginPage.checkMessage()
        await loginPage.emailLink.click()
        await browser.switchWindow('GitFlic')
        await expect(loginPage.alertText).toHaveText('Спасибо, Ваш Email подтвержден')
    })
    it('cannot sign up with the existing email', async() => {
        await browser.newWindow('https://gitflic.ru/auth/signup')
        await loginPage.usernameInput.click()
        await loginPage.usernameInput.addValue('surkov.ron@gmail.com')
        await loginPage.emailInput.click()
        await loginPage.emailInput.addValue('surkov.ron@gmail.com')
        await loginPage.passwordInput.click()
        await loginPage.passwordInput.addValue('surkov.ron@gmail.com')
        await loginPage.passwordConfirmInput.click()
        await loginPage.passwordConfirmInput.addValue('surkov.ron@gmail.com')
        await loginPage.clickOnCheckbox(1)
        await loginPage.signUpBtn.click()
        await expect(loginPage.duplicateEmailError).toHaveText('Данный email не может быть использован')
    })

    // it("finds an element", async () => {
    //     await browser.url("/")
    //     let text = await $("#page-footer a").getText()
    //     console.log(text)
    //     await expect(text).toEqual("Elemental Selenium") 
    // })
    // it("displays footer", async() => {
    //     console.log(await loginPage.pageFooter.isDisplayed())
    //     await expect(loginPage.pageFooter).toBeDisplayed(true)
    // })
    // it("displays the footer in viewport", async() => {
    //     await expect(loginPage.pageFooter).not.toBeDisplayedInViewport(true)
    //     await loginPage.pageFooter.scrollIntoView()
    //     await expect(loginPage.pageFooter).toBeDisplayedInViewport(true)
    // })
    // it("opens a first link", async() => {
    //     await loginPage.clickOnLink(1)
    //     console.log(await browser.getUrl())
    //     await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
    // })
    // it("redirects to checkbox page", async() => {
    //     await browser.url("/")
    //     await loginPage.clickOnLink(6)
    //     await loginPage.clickCheckbox(1)
    //     await expect(loginPage.checkbox(1)).toBeSelected(true)
    // })
    // it('clicks the checkbox', async() => {
    //     await browser.url('/')
    //     await loginPage.clickOnLink(2)
    //     await loginPage.clickButton()
    //     await expect(loginPage.elements()).toBeDisplayed(true)
    // })
    // it('enters login credentials', async() => {
    //     await browser.url(`${browser.options.baseUrl}/login`)
    //     await loginPage.enterUsername('Roman')
    //     await loginPage.enterPassword('WWE')
    //     await expect(loginPage.username).toHaveValue('Roman')
    //     await expect(loginPage.password).toHaveValue('WWE')
    // })
    // it('clears input fields', async() => {
    //     await loginPage.username.click()
    //     await loginPage.username.clearValue()
    //     await loginPage.password.click()
    //     await loginPage.password.clearValue()
    //     await expect(loginPage.username).toHaveValue('')
    //     await expect(loginPage.password).toHaveValue('')
    // })
        // it ('hovers on figures', async () => {
        //     await browser.url(`${browser.options.baseUrl}/hovers`)
        //     await loginPage.hoverOnFigure(3)
        //     await expect(figureDetails(3)).toHaveText('name: user1')
        // })
        // it('sends keyboard value', async() => {
        //     await browser.url(`${browser.options.baseUrl}/key_presses`)
        //     await loginPage.clickTarget()
        //     await loginPage.keyboardTarget('Backspace')
            // await expect(loginPage.result).toHaveText('You entered: BACK_SPACE')
        // })
        // it ('scrolls to footer', async() => {
        //     await browser.url('/')  
        //     await loginPage.scrollToPageFooter()
        //     await expect(loginPage.pageFooter).toBeDisplayedInViewport(true)
        // })
        // it ('switches to new window', async() => {
        //     await browser.url(`${browser.options.baseUrl}/windows`)
        //     await loginPage.ClickHere()
        //     await browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
        //     await expect(loginPage.h3header).toExist()
        //     await expect(loginPage.h3header).toHaveText('New Window')
        // })
        // it ('sends value inside an iframe', async() => {
        //     await browser.url(`${browser.options.baseUrl}/iframe`)
        //     await browser.switchToFrame(0)
        //     await loginPage.sendTextToBody('QA is FUN')
        //     await expect(loginPage.iframeBody).toHaveText('QA is FUN')
        // })
        // it('drags and drops', async() => {
        //     await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        //     await loginPage.dragAtoB()
        //     await browser.pause(4000)
        // })
})
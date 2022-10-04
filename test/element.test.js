const { default: pause } = require("webdriverio/build/commands/browser/pause")
const { default: dragAndDrop } = require("webdriverio/build/commands/element/dragAndDrop")
const WebPage = require("../pageobjects/webpage.js")
const Link = require("../pageobjects/link.js")
const MainPage = require("../pageobjects/mainpage.js");
const SignUpPage = require("../pageobjects/signuppage.js");
const utils = require('../utils/utils.js')

describe("cases with Onliner", () => {
    it('signs up a new user', async() => {
        await MainPage.openSignUpPage()
        await SignUpPage.signUpLink.click() 
        await SignUpPage.fillForm()
        await utils.confirmEmail()
    })
})
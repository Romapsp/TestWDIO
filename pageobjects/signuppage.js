const Link = require('./link');
const WebPage = require('./webpage');
const utils = require('../utils/utils')


class SignUpPage {

    get signUpBtn () {
        return $('.auth-form__description.auth-form__description_primary.auth-form__description_small.auth-form__description_condensed-other:nth-child(1) a')
    }
    get emailField () {
        return $('.auth-input__wrapper.auth-form__input-wrapper.auth-form__input-wrapper_width_full input[type=email]')
    }

    get passwordField () {
        return $('.auth-input__wrapper.auth-form__input-wrapper.auth-form__input-wrapper_width_full input[type=password]')
    }

    get passwordConfirmField () {
        return $('//*[@id="container"]/div/div/div/form/div[2]/div/div[8]/div/div/div/div/input')
    }

    async fillForm () {
        const userData = await utils()
        await this.emailField.click()
        await this.emailField.addValue(userData.emailAddress)
        console.log(userData.emailAddress)
        // await browser.pause(3500)
        await this.passwordField.click()
        await this.passwordField.addValue(userData.password)
        await this.passwordConfirmField.click()
        await this.passwordConfirmField.addValue(userData.passwordConfirm)
        await browser.pause(3500)
    }
}

module.exports = new SignUpPage();
const Link = require('./link');
const WebPage = require('./webpage');
const utils = require('../utils/utils')


class SignUpPage {

    get signUpLink () {
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

    get signUpCheckbox () {
        return $('.i-checkbox__faux')
    }

    get signUpBtn () {
        return $('.auth-button.auth-button_primary.auth-button_middle.auth-form__button.auth-form__button_width_full')
    }

    async fillForm () {
        const userData = await utils()
        await this.emailField.click()
        await this.emailField.addValue(userData.emailAddress)
        await this.passwordField.click()
        await this.passwordField.addValue(userData.password)
        await this.passwordConfirmField.click()
        await this.passwordConfirmField.addValue(userData.passwordConfirm)
        await this.signUpCheckbox.click()
        await this.signUpBtn.click()
    }


}

module.exports = new SignUpPage();
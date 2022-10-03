const Link = require('./link');
const WebPage = require('./webpage');
const utils = require ('../utils/utils')
class SignUpPage {

    get signUpBtn () {
        return $('.auth-form__description.auth-form__description_primary.auth-form__description_small.auth-form__description_condensed-other:nth-child(1) a')
    }
    get emailField () {
        return $('.auth-input__wrapper.auth-form__input-wrapper.auth-form__input-wrapper_width_full input')
        // .selectByAttribute('type','email')
    }

    get passwordField () {
        return $('.auth-input__wrapper.auth-form__input-wrapper.auth-form__input-wrapper_width_full input').selectByAttribute('type','password')
    }

    get passwordConfirmField () {
        return $('.auth-input__wrapper.auth-form__input-wrapper.auth-form__input-wrapper_width_full input').selectByAttribute('placeholder','Повторите пароль')
    }
    async fillForm () {
        await this.emailField.click()
        await this.emailField.addValue(utils.emailAddress)
        console.log(await emailAddress)
        await this.passwordField.click()
        await this.passwordField.addValue(utils.Utils.password)
        await this.passwordConfirm.click()
        await this.passwordConfirmField.addValue(utils.Utils.passwordConfirm)
        await browser.pause(3500)
    }
}

module.exports = new SignUpPage();
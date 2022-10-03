const Link = require('./link');
const WebPage = require('./webpage');
class MainPage {
    get signBtn() {
        return $('.auth-bar__item.auth-bar__item--text')
    }


    async openSignUpPage () {
        await WebPage.open()
        await this.signBtn.click()
    }

}

module.exports = new MainPage();


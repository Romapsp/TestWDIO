

// const { default: $ } = require('webdriverio/build/commands/browser/$');
// const { default: $ } = require('webdriverio/build/commands/browser/$');
// const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get h3header () {
        return $('h3')
    }
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get enableButton() { 
        return $('#input-example button') 
    }

    get inputEnabledField() {
         return $('#input-example input') 
    }

    get pageFooter() { 
        return $('#page-footer') 
    }

    link(index) {
        return $(`ul li:nth-child(${index}) a`)
    }

    checkbox(index) {
        return $(`#checkboxes input:nth-child(${index})`)
    }

    get addBtn() {
        return $('.example button')
    }

    elements() {
        return $('#elements')
    }

    get username() {
        return $('#username')
    }

    get password() {
        return $('#password')
    }

    figures (index) {
        return $(`.figure:nth-child(${index}) img`)
    }

    figureDetails (index) {
        return $(`.example .figure:nth-child(${index}) .figcaption h5`)
    }

    get target() {
        return $('.example #target')
    }

    get result() {
        return $('.example #result')
    }

    get hereLink  () {
        return $('.example a')
    }

    get iframeBody () {
        return $('#tinymce')
    }

    get iframe () {
        return $('.tox-edit-area')
    }

    get columnA () {
        return $('#column-a')
    } 

    get columnB () {
        return $('#column-b')
    }

    get columnAHeader () {
        return $('#column-a header')
    }

    get columnBHeader () {
        return $('#column-b header')
    }

    get draggable () {
        return $('#draggable')
    }

    get droppable () {
        return $('#droppable')
    }

    get registerButton () {
        return $('.btn.btn-outline-light.d-none.d-sm-block')
    }

    get copyBtn () {
        return $('#d_clip_button #copy-button')
    }

    get usernameInput () {
        return $('#username')
    }

    get emailInput () {
        return $('#email')
    }

    get passwordInput () {
        return $('#password')
    }

    get passwordConfirmInput () {
        return $('#passwordConfirm')
    }

    checkboxFlic (index) {
        return $('#consentApplied')
    }

    get signUpBtn () {
        return $('.btn.btn-sm.btn-success.btn-user.btn-block')
    }

    get alertText () {
        return $('.alert.alert-info.text-center')
    }

    get tdrow () {
        return $('td:nth-child(2) .row-link')
    }

    get refreshBtn () {
        return $('.fa.fa-refresh.fa-fw.fa-lg ')
    }

    get closeBtn () {
        return $('#mailbox')
    }

    get emailLink () {
        return $('table:nth-child(1) tbody td td table tbody tr td center a')
    }

    get emailConfirm () {
        return $('.bg-light.border.rounded.p-4.mb-3 .alert.alert-info.text-center')
    }

    get duplicateEmailError () {
        return $('.small')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clickOnLink (index) {
        await this.link(index).click()
    }
    
    async clickCheckbox (index) {
        await this.checkbox(index).click()
    }

    async clickButton() {
        await this.addBtn.click()
    }

    async enterUsername (text) {
        await this.username.setValue(text)
    }

    async enterPassword (text) {
        await this.password.setValue(text)
    }

    async hoverOnFigure (index) {
        await this.figures(index).moveTo(1,1)
    }

    async getFigureDetailsText (index) {
        return await this.figureDetails(index).getText()
    }

    async clickTarget () {
        await this.target.click()
    }

    async keyboardTarget (text) {
        await this.target.keys(text)
    }

    async resultKeyboardTarget () {
        return await this.result.getText()
    }

    async scrollToPageFooter () {
        await this.pageFooter.scrollIntoView()
        await this.pageFooter.moveTo()
    }

    async ClickHere () {
        await this.hereLink.click()
    }

    async sendTextToBody (text) {
        await this.iframeBody.waitForDisplayed()
        await this.iframeBody.click()
        await browser.pause(70)
        await this.iframeBody.clearValue()
        await this.iframeBody.keys(text)
    }

    async dragAtoB () {
        await this.draggable.dragAndDrop({x:200, y:50})
    }

    async registerButtonClick() {
        await this.registerButton.click()
    }

    async copyBtnValue () {
        return await this.copyBtn.getAttribute('data-clipboard-text')
    } 

    async clickOnCheckbox (index) {
        await this.checkboxFlic(index).click()
    }

    async checkMessage () {
        if (await this.tdrow.getText() === 'Подтверждение почтового адреса') {
            await this.tdrow.click()
        } else {
            await this.refreshBtn.scrollIntoView()
            await browser.pause(5000)
            await this.refreshBtn.click()
            await this.checkMessage()
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

}

module.exports = new LoginPage();

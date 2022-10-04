const E2EMailbox = require("e2e-mailbox").default;
const mailbox = new E2EMailbox();


    async function generateUserDataWithEmail() {
    const emailAddress = await mailbox.createEmailAddress()
    const password = 'EnigmaMachine1998'
    const passwordConfirm = password 
    return {emailAddress, password, passwordConfirm}
}
      async function confirmEmail () {
        const foundEmail = await mailbox.waitForEmail('Завершение регистрации', 5)
        if (!foundEmail) {
            return;
          }
        const urls = mailbox.extractLinksFromEmail(foundEmail);
        const confirmUrl = urls.filter((url) => url.includes('https://profile.onliner.by/registration/'))[0];
        if (!confirmUrl) {
            return;
          }
        await browser.url(confirmUrl)
        await browser.pause(10000)
        console.log(await confirmUrl)
    }


module.exports = generateUserDataWithEmail, confirmEmail;



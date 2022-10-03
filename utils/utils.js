const E2EMailbox = require("e2e-mailbox").default;
const mailbox = new E2EMailbox();

class Utils {

    async generateUserDataWithEmail() {
    const emailAddress = await mailbox.createEmailAddress()
    const password = 'EnigmaMachine1998'
    const passwordConfirm = password 
}
}

module.exports = new Utils;
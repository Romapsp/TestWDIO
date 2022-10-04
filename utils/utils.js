const E2EMailbox = require("e2e-mailbox").default;
const mailbox = new E2EMailbox();


    async function generateUserDataWithEmail() {
    const emailAddress = await mailbox.createEmailAddress()
    const password = 'EnigmaMachine1998'
    const passwordConfirm = password 
    return {emailAddress, password, passwordConfirm}
}


module.exports = generateUserDataWithEmail;



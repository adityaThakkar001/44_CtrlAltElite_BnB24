const MailComposer = require('nodemailer/lib/mail-composer');
const { google } = require('googleapis');
const { userId, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('./EmailConstanst');
const { getTokenFromFile, checkExpiry, refreshToken, saveToken } = require('./util');


const credentials = {
    CLIENT_ID : CLIENT_ID,
    CLIENT_SECRET : CLIENT_SECRET,
    REDIRECT_URI : REDIRECT_URI
}


const getGmailService = async () => {
    const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI } = credentials;
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI[0]);
    
    // getting the token
    var tokens = await getTokenFromFile();
    //check expiry 
    if(!checkExpiry(tokens)){
        tokens = refreshToken(oAuth2Client,tokens.refresh_token);
        saveToken(tokens);
    }
    oAuth2Client.setCredentials(tokens);
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    return gmail;
};


const encodeMessage = (message) => {
    return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const createMail = async (options) => {
    const mailComposer = new MailComposer(options);
    const message = await mailComposer.compile().build();
    return encodeMessage(message);
};

const sendMail = async (options) => {
    const gmail = await getGmailService();
    const rawMessage = await createMail(options);
    const { data: { id } = {} } = await gmail.users.messages.send({
        userId: userId,
        resource: {
            raw: rawMessage,
        },
    });
    return id;
};

async function Send_Mail(to, subject, html) {
    await sendMail({
        to: to,
        subject: subject,
        text:'',
        html: html});
}

module.exports = { Send_Mail };
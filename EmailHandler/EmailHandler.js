const { google } = require('googleapis');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('./EmailConstanst');
const { getTokenFromFile, generateToken } = require("./util");
const { Send_Mail } = require('./sendMail');

// Class to sendMail to the user
class MailUtil{
    constructor(){

        const credentials = {
            CLIENT_ID: CLIENT_ID,
            CLIENT_SECRET: CLIENT_SECRET,
            REDIRECT_URI: REDIRECT_URI
        }
        
        this.oAuth2Client = new google.auth.OAuth2(credentials.CLIENT_ID, credentials.CLIENT_SECRET, credentials.REDIRECT_URI);
        
    }
    async SendMailToUser(to, subject, html,res){
        var tokens = await getTokenFromFile();
        if(tokens == null)
            tokens = await generateToken(this.oAuth2Client,res)
        Send_Mail(to,subject,html);
    }
}

module.exports = {MailUtil};
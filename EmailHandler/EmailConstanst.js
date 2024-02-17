const MainUrl = 'http://localhost:8080'

const userId = 'tanaykulkarnibusiness@gmail.com';
const CLIENT_ID = '160420188091-gujh8apch3p9cllt6l2ij552cf417iij.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = [ MainUrl + "/mailHandler/token" ];
const SCOPES = ['https://mail.google.com'];


module.exports = {userId,CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,SCOPES};
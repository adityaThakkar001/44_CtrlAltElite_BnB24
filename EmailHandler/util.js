const { SCOPES } = require("./EmailConstanst");
const fs = require('fs');
// generate token.json from refresh token
async function refreshToken(oAuth2Client, refreshToken) {
    try {
        const { tokens } = await oAuth2Client.refreshToken(refreshToken);
        oAuth2Client.setCredentials(tokens);
        // Save the new tokens to your token.json file if needed
        await fs.writeFileSync(__dirname + '/token.json', JSON.stringify(tokens));
        return tokens;
    } catch (err) {
        console.error('Error refreshing access token:', err);
    }
    return null;
}

// get Token from token.json 
async function getTokenFromFile() {
    try {
        // console.log(__dirname + '/token.json');
        const token_data = await fs.readFileSync(__dirname + '/token.json', 'utf-8');
        
        const tokens = JSON.parse(token_data);
        return tokens;
    } catch (err) {
        // console.log(err);
        return null;
    }
}

async function getTokenFromCode(oAuth2Client, code) {
    const { tokens } = await oAuth2Client.getToken(code);
    return tokens;
}

async function saveToken(tokens) {
    try {
        await fs.writeFileSync(__dirname + '/token.json', JSON.stringify(tokens));
        return true;
    } catch (err) {
        console.err(err);
        return false;
    }
}

// generate token.json
async function generateToken(oAuth2Client, res) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log(authUrl);
    res.redirect(authUrl);
}

async function checkExpiry(tokens) {
    return tokens.expiry_date && tokens.expiry_date > Date.now();
}

module.exports = { generateToken, checkExpiry, saveToken, getTokenFromCode, getTokenFromFile, refreshToken }
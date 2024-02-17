const { tokenModel } = require("../Database/schemas");

async function saveToken(new_generated_token) {
    const new_token = new tokenModel({caseToken:new_generated_token});
    new_token.save((err,save_token)=>{
        if(err){
            console.error(err);
        }else{
            console.log('save_token')
        }
    });
}

async function checkTokenExists(tokenToCheck) {
    try {
        const existingToken = await tokenModel.findOne({ caseToken: tokenToCheck }).exec();
        return !!existingToken; // Returns true if the token exists, false otherwise
    } catch (error) {
        console.error(error);
        return false; // Return false in case of an error
    }
}

module.exports = {checkTokenExists,saveToken}


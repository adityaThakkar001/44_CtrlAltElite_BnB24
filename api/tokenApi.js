const { tokenModel } = require("../Database/schemas");

const mongoose = require('mongoose');
async function connect_to_database(){
    try{
        await mongoose.connect('mongodb+srv://TanayKulkarni:Tanay%40140203@cluster0.9uemgw8.mongodb.net/?retryWrites=true&w=majority', { serverSelectionTimeoutMS: 5000 });

        console.log('Connected successfully')
    }catch(err){
        console.log('Error in connecting databse : ' + err)
    }
}

async function saveCaseToken(new_generated_token) {
    await connect_to_database();
    const new_token = new tokenModel({caseToken:new_generated_token});
    new_token.save();
}

async function checkTokenExists(tokenToCheck) {
    try {
        await connect_to_database();
        const existingToken = await tokenModel.findOne({ caseToken: tokenToCheck }).exec();
        return !!existingToken; // Returns true if the token exists, false otherwise
    } catch (error) {
        console.error(error);
        return false; // Return false in case of an error
    }
}

module.exports = {checkTokenExists,saveCaseToken}


const mongoose = require('mongoose');


const caseSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    suspect_name: {
        type: String,
        required: true
    },
    evidence: {
        type:[String], // Store binary image data
        contentType: String // Store image content type (e.g., 'image/jpeg')
    },
    status_of_case:{
        type:Number,
        default:1
    }
});

const CaseInformation = mongoose.model('CaseInformation', caseSchema);

const tokenSchema = new mongoose.Schema({
    caseToken:{
        type:String,
        default:''
    }
});

const tokenModel =  mongoose.model('tokenInfo',tokenSchema);

module.exports = {CaseInformation,tokenModel};
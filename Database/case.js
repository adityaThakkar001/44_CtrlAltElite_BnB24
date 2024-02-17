const mongoose = require('mongoose');
const { CaseInformation } = require('./schemas');

mongoose.connect('mongodb://localhost/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

function save_case(data){
    const new_case = new CaseInformation(data);
    new_case.save((err,save_case)=>{
        if(err){
            console.error(err);
        }else{
            console.log('Case saved')
        }
    });
}

async function get_all_cases() {
    try {
        const cases = await CaseInformation.find({}).exec();
        return cases;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {save_case,get_all_cases};
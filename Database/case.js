const mongoose = require('mongoose');
const { CaseInformation } = require('./schemas');
async function connect_to_database(){
    try{
        await mongoose.connect('mongodb+srv://TanayKulkarni:Tanay%40140203@cluster0.9uemgw8.mongodb.net/?retryWrites=true&w=majority', { serverSelectionTimeoutMS: 5000 });
    }catch(err){

    }
}

async function save_case(data){
    await connect_to_database();
    const new_case = new CaseInformation(data);
    await new_case.save();
    console.log('case saved');
}

async function get_all_cases() {
    try {
        await connect_to_database();
        const cases = await CaseInformation.find({}).exec();
        return cases;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function update_case(suspect_name) {
    try {
        await connect_to_database();
        const result = await CaseInformation.findOneAndUpdate({suspect_name:suspect_name}, { $inc: { status_of_case: 1 } }, { new: true });
        console.log('Status incremented successfully');
        console.log('Updated document:', result);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function get_status_of_case(token){
    await connect_to_database();
    const result = await CaseInformation.findOne({token:token}).exec();
    // console.log(result);
    return result.status_of_case;

}

module.exports = {save_case,get_all_cases,update_case,get_status_of_case};
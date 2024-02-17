const express = require('express');
const { getTokenFromFile } = require('../EmailHandler/util');
const { get_all_cases, save_case,update_case,get_status_of_case} = require('../Database/case');
const { checkTokenExists } = require('./tokenApi');
const CaseRouter = express.Router();


CaseRouter.get('/status',async (req,res)=>{
    const token = req.query.token;
    const value = await get_status_of_case(token);
    res.json({status:true,status_of_case:value});
})


CaseRouter.put('/case',async (req,res)=>{
    const {suspect_name} = req.body;
    try{
        await update_case(suspect_name);
        res.json({status:true});
    }catch(err){
        res.json({status:false,data:[]});
    }

})


CaseRouter.get('/allCases',async (req,res)=>{
    try{
        const cases = await get_all_cases();
        res.json({status:true,data:cases});
    }catch(err){
        res.json({status:false,data:[]});
    }

})

CaseRouter.post('/registerCase',async (req,res)=>{
    const {token,suspect_name,summary,evidence} = req.body;
    const token_verification_res = await checkTokenExists(token);
    if(!token_verification_res){
        res.json({status:false})
        return;
    }
    try{
        const cases = get_all_cases();
        await save_case({token:token,suspect_name:suspect_name,summary:summary});
        res.json({status:true,data:cases});
    }catch(err){
        res.json({status:false,data:[]});
    }

});


module.exports = CaseRouter;
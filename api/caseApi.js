const express = require('express');
const { getTokenFromFile } = require('../EmailHandler/util');
const { get_all_cases } = require('../Database/case');
const { checkTokenExists } = require('./tokenApi');
const CaseRouter = express.Router();

CaseRouter.get('/allCases',(req,res)=>{
    try{
        const cases = get_all_cases();
        res.json({status:false,data:cases});
    }catch(err){
        res.json({status:false,data:[]});
    }

})

CaseRouter.post('/registerCase',(req,res)=>{
    const {token,suspect_name,summary,evidence} = req.body;
    const token_verification_res = checkTokenExists(token);
    if(token_verification_res){
        res.json({status:false})
        return;
    }
    try{
        const cases = get_all_cases();
        res.json({status:false,data:cases});
    }catch(err){
        res.json({status:false,data:[]});
    }

})
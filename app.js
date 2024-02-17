// Imports
const EmailServiceRouter = require('./Routes/EmailRoutes');
const { MailUtil } = require('./EmailHandler/EmailHandler');
const { mail_subject, get_case_token } = require('./Constants/Constants');

const express = require('express');
const { generateRandomString } = require('./utils');
const { saveCaseToken, checkTokenExists } = require('./api/tokenApi');
const CaseRouter = require('./api/caseApi');
const app = express();

app.use(express.static(__dirname + '/static'))
app.use(express.json());

// CASES API
app.use('/cases',CaseRouter)
app.use('/mailHandler',EmailServiceRouter)

// End user
app.get('',async (req,res)=>{
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/genToken',async (req,res)=>{
    res.sendFile(__dirname + '/html/getToken.html')
});


app.get('/checkstatus',async (req,res)=>{
    res.sendFile(__dirname + '/html/checkStatus.html')
});

app.get('/allCases',async (req,res)=>{
    res.sendFile(__dirname + '/html/getAllCases.html')
});


// add case
app.get('/RegisterCase',async (req,res)=>{
    const token = req.query.token;
    // checkTokenExists
    const x = await checkTokenExists(token);
    if(!x){
        res.redirect('/')
    }
    res.sendFile(__dirname + '/html/add_case.html')
});

// BACKEND PART

app.get('/authority',async (req,res)=>{
    res.sendFile(__dirname + '/html/AuthorityLogin.html')
});






// Mail Handler 
app.post('/sendEmail',async (req,res)=>{
    const {tokenMail} = req.body;
    const mail = await new MailUtil();
    const token = generateRandomString(6);
    await saveCaseToken(token);
    await mail.SendMailToUser(tokenMail,mail_subject,get_case_token(token),res); 
    res.send('mail send')
});



app.listen(8080,()=>{
    console.log('listening to port 8080');
});
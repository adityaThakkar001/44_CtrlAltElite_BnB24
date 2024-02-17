const express = require('express');
const EmailServiceRouter = require('./Routes/EmailRoutes');
const { MailUtil } = require('./EmailHandler/EmailHandler');
const { mail_subject, get_case_token } = require('./Constants/Constants');
const app = express();
app.get('',async (req,res)=>{
    const email_of_user = 'kaivalyakulkarni69@gmail.com'
    const mail = await new MailUtil();
    await mail.SendMailToUser(email_of_user,mail_subject,get_case_token('TEST_TOKEN'),res); 
    res.send('mail send')

})

// Mail Handler 
app.use('/mailHandler',EmailServiceRouter)

app.listen(8080,()=>{
    console.log('listening to port 8080');
});
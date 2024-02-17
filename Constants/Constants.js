const main_server_url = 'http://localhost:8080'

const mail_subject = 'Your Anti-Corruption Token'

function get_case_token(token){
const mail_body =  
`Dear User,<br>
Congratulations! You've been granted a unique Anti-Corruption Token as a testament to your commitment against corruption. This token serves as a symbol of your dedication to fostering integrity and transparency.<br>
<br>
To register a case and actively contribute to our anti-corruption initiatives, simply click on the following link: 
<a href='${main_server_url}/RegisterCase?token=${token}'>Register the case</a><br>
<b>Complaint token : ${token}</b>
<br><br>

Please keep this token secure, as it will be required for any future interactions related to our anti-corruption initiatives.<br>

Thank you for joining us in the fight against corruption. Together, we can make a difference.<br>

Best regards,<br>
WhistleBlowerHub`
return mail_body;
}

module.exports = {mail_subject,get_case_token,main_server_url};
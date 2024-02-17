const { MainUrl,webUrl } = require("../ServerConstants");

function get_verification_mail_body(token) {

    const mailVerificationFormat = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Verification</title>
</head>
<body>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
            <td bgcolor="#FF4D00" style="padding: 40px 30px 20px 30px; color: #fff; font-size: 24px; font-weight: bold; text-align: center;">
                Verify Your Email Address
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="font-size: 16px;">
                            Hello,
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 0 30px 0; font-size: 16px; line-height: 1.6;">
                            Thank you for signing up! To complete your registration, please click the button below to verify your email address.
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                        <a href="${webUrl}/user/actverify/${token}" style="display: inline-block; background-color: #FF4D00; color: #fff; text-decoration: none; padding: 10px 20px; font-size: 16px; border-radius: 5px;" target="_blank">Verify Email</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px 0 0 0; font-size: 16px; line-height: 1.6;">
                            If you did not create an account with us, you can safely ignore this email.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#FF4D00" style="padding: 20px 30px 20px 30px; font-size: 16px; text-align: center; color: #fff;">
                © CodeTikki
            </td>
        </tr>
    </table>
</body>
</html>
`
return mailVerificationFormat;
}

module.exports = {get_verification_mail_body}
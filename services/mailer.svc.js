const nodemailer = require("nodemailer");
const config = require('../config');

const MailerService = {
    sendMail: (data) => {
        return new Promise( async (resolve, reject) => {
            let frontEndUrl = `${config.FRONTEND_URL}/updatePassword?email=${data.email}&token=${data.resetPasswordToken}&expiry=${data.resetPasswordExpiry}`;
            // let testAccount = await nodemailer.createTestAccount();
            // console.log(testAccount);
            let transporter = nodemailer.createTransport({
                // host: "smtp.ethereal.email",
                // port: 587,
                // secure: false,
                // auth: {
                //     user: testAccount.user,
                //     pass: testAccount.pass,
                // },
                service: 'gmail',
                auth: {
                    user: 'trainingdli2@gmail.com',
                    pass: 'training@123'
                }
            });
            let mailOptions = {
                from: 'test@gmail.com',
                to: data.email,
                subject: 'Reset Password Link',
                html: `
                    <html>
                        <body>
                            <h2>Hello ${data.firstName} ${data.lastName}</h2>
                            <h3>Please click on below link for resetting the password.</h3>
                            <a href="${frontEndUrl}">Reset Password Link</a>
                        </body>
                    </html>
                `
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info)
                }
            });
        })
    }
}

module.exports = MailerService;
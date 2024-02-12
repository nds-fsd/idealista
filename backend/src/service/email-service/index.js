const formData = require ("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});
const fs = require("fs");
const Handlebars = require("handlebars");
const path = require("path");

exports.sendWelcomeEmail = async(user) =>{
    const testEmailTemplate = fs.readFileSync(path.resolve(__dirname,"templates/welcome.handlebars"), "utf-8");
    const template = Handlebars.compile(testEmailTemplate);
    try {
        await mg.message.create("sandboxc9baa73636c74bb59df51c3d2bdf8f3a.mailgun.org",{
            from:"Realista <sandboxc9baa73636c74bb59df51c3d2bdf8f3a.mailgun.org>",
            to: user.email,
            subject: "Bienvenido a Realista",
            html: template({user})
        });
    } catch (error) {
        console.log(error.message)
    }
}
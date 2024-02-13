
const formData = require ("form-data");
const Mailgun = require("mailgun.js");
const fs = require("fs");
const Handlebars = require("handlebars");
const path = require("path");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

exports.sendWelcomeEmail = async(user) =>{
    const emailData = {
        from:"Realista <sandbox9bcd9537a0034901868a674f1bdd3b57.mailgun.org>",
        to: user,
        subject: "Bienvenido a Realista"
    };

    try {
    const testEmailTemplate = fs.readFileSync(path.resolve(__dirname,"templates/welcome.handlebars"), "utf-8");
    const template = Handlebars.compile(testEmailTemplate);
    emailData.html= template({user});

    await mg.message.create("sandbox9bcd9537a0034901868a674f1bdd3b57.mailgun.org",emailData);
    console.log("Correo enviado con éxito");
    } catch (error) {
        console.log(emailData)
        console.log("Error al enviar mail")
    }
}
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const functions  = require('firebase-functions');

const config = functions.config();
admin.initializeApp();
const transporter = nodemailer.createTransport({service: 'Gmail', auth: {user: config.user.email, pass: config.user.password }});

const mailToOptions = {from: 'Arc Development', to: 'sirruggedballs@outlook.com', subject: 'testing', text: 'testing'};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
    transporter.sendMail(mailToOptions, error => {
      if(error)
        response.send(error);
      else
        response.send("Message sent Successfully!!");
    })
});

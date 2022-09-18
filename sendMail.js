const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
 
  var transporter =  nodemailer.createTransport({
    host: "smtp.gmail.com",
    // port: 465,
    service: "gmail",
    auth: {
      user: process.env.GMAIL, // user email
      pass: process.env.PASSWORD, // user password
    },
  });

  // send mail with defined transport object
  var mailOptions = {
    from: process.env.GMAIL, // sender address
    to: process.env.TO, // list of receivers 
    subject: "Thanks for using our Website", // Subject line
    text: "Do not reply on this email as this email is bot", // plain text body
    // html: "<h1>Do not reply on this email as this email is bot</h1>", // html body here we can use html also
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent Sucessfully");
    }
  });

  
  
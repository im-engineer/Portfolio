import nodemailer from 'nodemailer'
import 'dotenv/config';

var email = process.env.EMAIL;

export const SendEmail = (from, to, subject, text) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email.username,
      pass: email.password,
    },
  });
  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
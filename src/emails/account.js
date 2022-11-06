const nodemailer = require("nodemailer");
const { myEmail, password } = require("./myGmailCredentials");

let mailTransporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: myEmail,
      pass: password,
   },
});

const sendWelcomeEmail = (email, name) => {
   mailDetails = {
      from: myEmail,
      to: email,
      subject: "Thanks for joining in!",
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
   };

   mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) {
         console.log(err);
      } else {
         console.log("Email sent successfully");
      }
   });
};

const sendCancelationEmail = (email, name) => {
   mailDetails = {
      from: myEmail,
      to: email,
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back next time.`,
   };

   mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) {
         console.log(err);
      } else {
         console.log("Email sent successfully");
      }
   });
};

module.exports = {
   sendWelcomeEmail,
   sendCancelationEmail,
};

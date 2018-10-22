function WelcomeMailer(userEmail) {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: procces.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD
    }
  });

  var WelcomeMailerOptions = {
    from: 'Powder Intelligence',
    to: userEmail.email,
    replyTo: 'powderintelligence@gmail.com',
    subject: 'Welcome to Powder Intelligence',
    text: 'Thank you for joining the Powder Intelligence community. We are dedicated to providing accurate and timely winter weather data for winter sports enthusiasts.  Thank you for signing up for our beta.  We are currently building out our platform and look forward to sharing it with you at no cost.',
    html: '<p>Thank you for joining the Powder Intelligence community. We are dedicated to providing accurate and timely winter weather data for winter sports enthusiasts.  Thank you for signing up for our beta.  We are currently building out our platform and look forward to sharing it with you at no cost.</p>'
  }

  transporter.sendMail(WelcomeMailerOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = WelcomeMailer;

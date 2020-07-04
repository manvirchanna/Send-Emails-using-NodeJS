const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '******************', // TODO: your gmail account
        pass: '*************' // TODO: your gmail password
    }
});

let mailOptions = {
    from: '*********************', // TODO: email sender
    to: '*********************', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs:', err);
    }
    return log('Email sent!!!');
});
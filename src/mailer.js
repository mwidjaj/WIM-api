import nodemailer from 'nodemailer';

const from = '"WIM-Motors" <info@wimmotors.com>';

function setufp() {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
}

export function sendConfirmationEmail(user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Welcome to WIM-Motors",
        text: `
        Welcome to WIM-Motors. Please, confirm your email.
        
        ${user.generateConfirmationUrl}
        `
    }

    transport.sendMail(email);
}
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
})

export async function sendVerificationMail(userEmail, verificationToken) {
    const baseURL = process.env.BASE_URL
    const verificationURL = `${baseURL}/api/users/verify/${verificationToken}`
    const info = await transporter
        .sendMail({
            from: 'ktrombala@gmail.com',
            to: userEmail,
            subject: 'Email Verification',
            text: `Click the following link to verify your email: ${verificationURL}`,
            html: `<strong>
//   Click the following link to verify your email:
//   <a href="${verificationURL}">
//     ${verificationURL}
//   </a>
// </strong>`,
        })
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

// old version

// import mgMail from 'mailgun';

// export const sendVerificationMail = async (userEmail, verificationToken) => {
//     const baseURL = process.env.BASE_URL;
//     const verificationURL = `${baseURL}/api/users/verify/${verificationToken}`;

//     mgMail.setApiKey(process.env.MAILGUN_API_KEY)
//     const msg = {
//         to: userEmail,
//         from: 'ktrombala@gmail.com',
//         subject: 'Email Verification',
//         text: `Click the following link to verify your email: ${verificationURL}`,
//         html: `<strong>
//   Click the following link to verify your email:
//   <a href="${verificationURL}">
//     ${verificationURL}
//   </a>
// </strong>`,
//     }

//     mgMail
//         .send(msg)
//         .then(() => {
//             console.log('Email sent')
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }
// -----------------------------------

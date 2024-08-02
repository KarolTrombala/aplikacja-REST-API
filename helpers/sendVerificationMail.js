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

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
        user: 'postmaster@sandbox8f6e2742f2734a0497e83f1f7336f851.mailgun.org',
        pass: 'be5315f98da3c84a844f408ca24a6bec-afce6020-1849b9a8',
    },
})

export async function sendVerificationMail (userEmail, verificationToken) {
    const baseURL = process.env.BASE_URL
    const verificationURL = `${baseURL}/api/users/verify/${verificationToken}`
    const info = await transporter
        .sendMail({
            from: 'ktrombala@gmail.com',
            to: 'userEmail',
            subject: 'Email Verification',
            text: 'Click the following link to verify your email: ${verificationURL}',
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

main().catch(console.error)
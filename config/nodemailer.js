import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PW,
}})

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'New Message from Portfolio',
    text: 'New Message from Portfolio',
    html: '<p>New Message from Portfolio</p>'
}
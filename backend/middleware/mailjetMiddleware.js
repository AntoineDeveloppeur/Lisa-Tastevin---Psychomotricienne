const Mailjet = require('node-mailjet')

// Configurez Mailjet avec vos clés API
const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_API_SECRET_KEY,
})

const sendEmail = async (options) => {
    const { to, subject, text } = options

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'antoine.verove@gmail.com',
                    Name: 'Ton site',
                },
                To: [
                    {
                        Email: to,
                    },
                ],
                Subject: subject,
                TextPart: text,
            },
        ],
    })

    try {
        const result = await request
        console.log('Email sent successfully:')
        return result.body
    } catch (error) {
        console.error('Error sending email:')
        throw error
    }
}

const mailjetMiddleware = (req, res, next) => {
    req.sendEmail = sendEmail
    next()
}

module.exports = mailjetMiddleware

////////////////////////////////////////////

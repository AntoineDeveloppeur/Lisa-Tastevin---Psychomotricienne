// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require('twilio') // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

async function sendSMS(req, res, next) {
    try {
        const message = await client.messages.create({
            body: `Bonjour Lisa,\n\n${req.body.name} a écrit ce message :\n${req.body.message}\n\nVoici les coordonnées de ${req.body.name}:\n${req.body.email}\n${req.body.phone}\n\nBonne journée`,
            from: process.env.TWILIO_PHONE_SENDER,
            to: process.env.TWILIO_PHONE_RECEIVER,
        })

        console.log(message.body)
        next()
    } catch (error) {
        console.log('Erreur dans le try de sendSMS', error)
        next()
    }
}

module.exports = sendSMS

// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require('twilio') // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

async function createMessage() {
    const message = await client.messages.create({
        body: 'Bravo Antoine tu as réussi à envoyer semeuseu',
        from: process.env.TWILIO_PHONE_SENDER,
        to: process.env.TWILIO_PHONE_RECEIVER,
    })

    console.log(message.body)
}

module.exports = createMessage

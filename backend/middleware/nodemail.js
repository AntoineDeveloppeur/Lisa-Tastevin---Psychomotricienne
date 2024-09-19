const nodemailer = require('nodemailer')

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou un autre service comme 'yahoo', 'outlook', etc.
    auth: {
        user: process.env.EMAIL_SENDER_USER, // Votre email
        pass: process.env.EMAIL_PASSWORD, // Votre mot de passe ou un mot de passe d'application
    },
    tls: {
        rejectUnauthorized: false, // Désactiver la vérification SSL
    },
})

// Middleware pour envoyer un email à chaque requête
function emailNotification(req, res, next) {
    // Créer le contenu de l'email
    const mailOptions = {
        from: process.env.EMAIL_SENDER_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `Quelqu'un t'as envoyé un message depuis le formulaire de ton site`,
        text: `Bonjour Lisa,\n\n${req.body.name} a écrit ce message :\n${req.body.message}\n\nVoici les coordonnées de ${req.body.name}:\n${req.body.email}\n${req.body.phone}\n\nBonne journée`,
    }

    // Envoyer l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Erreur lors de l'envoi de l'email:", error)
        } else {
            console.log('Email envoyé:', info.response)
        }
    })

    // Passer à la prochaine fonction middleware
    next()
}

module.exports = emailNotification
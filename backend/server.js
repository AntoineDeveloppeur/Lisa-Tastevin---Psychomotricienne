const express = require('express')
const http = require('http')
require('dotenv').config({ path: './.env' })
const sendSMS = require('./middleware/sms')
const mailjetMiddleware = require('./middleware/mailjetMiddleware')
const lisaData = require('./data/lisa_data.json')

//Créer l'application avec le framework express
const app = express()

//Configurer l'application pour qu'elle se branche sur le port 3000

//Créer un serveur avec la fonction internet http qui fonctionne avec l'application nommée "app"
const server = http.createServer(app)

//Déclencher l'écoute du serveur
// TODO : faire une version local car je ne suis pas sûr que ça fonctionne
const port = 3000
server.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:${port}`)
})

// Middleware pour traiter les données JSON
app.use(express.json())

// la configuration CORS ne sert que pour le développement. En production le frontend et le backend sont
//sur le même serveur donc il n'y a pas de conflit
app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        '*'
        // 'https://lisa-tastevin-psychomotricienne.fr'
    )
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

// Route pour vérifier le reCAPTCHA
app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body
    console.log('je suis dans la veriication du captacha dans le serveur')

    if (!token) {
        console.log('je suis dans la boucle if qui vérifie le token')
        return res
            .status(400)
            .json({ success: false, message: 'Token manquant.' })
    }

    try {
        // Effectuez la requête avec fetch
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    secret: process.env.RECAPTCHA_SECRET_KEY,
                    response: token,
                }),
            }
        )

        const data = await response.json() // Parsez la réponse JSON

        const { success, score } = data

        if (success && score >= 0.5) {
            // Validation réussie (score > 0.5 recommandé)
            return res.json({
                success: true,
                message: 'reCAPTCHA validé.',
                ...lisaData,
            })
        } else {
            // Échec de la validation
            return res.status(400).json({
                success: false,
                message: 'Validation échouée.',
                score: score || 0,
            })
        }
    } catch (error) {
        console.error('Erreur lors de la vérification reCAPTCHA :', error)
        return res
            .status(500)
            .json({ success: false, message: 'Erreur serveur.' })
    }
})

app.post('/', mailjetMiddleware, async (req, res) => {
    console.log("je suis dans app.use de l'envoi de la réponse au client")
    try {
        //const { to, subject, text } = req.body
        const to = 'antoine.verove@gmail.com'
        const subject = `Quelqu'un t'as envoyé un message depuis le formulaire de ton site`
        const text = `Bonjour Lisa,\n\n${req.body.name} a écrit ce message :\n${req.body.message}\n\nVoici les coordonnées de ${req.body.name}:\n${req.body.email}\n${req.body.phone}\n\nBonne journée`
        await req.sendEmail({ to, subject, text })
        res.status(200).json({
            message:
                'Le formulaire a été envoyé avec succès, je reviens vers vous rapidement.',
        })
        console.log('je suis dans post à la fin du try')
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' })
    }
})

//TODO: Ajouter "sendSMS" et "emailNotification" pour la production
// en production:
//app.post('/', (req, res, next) => {
//  //en local : app.post('/form', (req, res, next) => {
//console.log("je suis dans app.use de l'envoi de la réponse au client")
//console.log('req.body', req.body)
//res.status(200).json({
//  message:
//    'Le formulaire a été envoyé avec succès, je reviens vers vous rapidement.',
//})
//})

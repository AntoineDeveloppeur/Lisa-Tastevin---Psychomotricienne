const express = require('express')
const http = require('http')
require('dotenv').config({ path: '../.env' })
const sendSMS = require('./middleware/sms')
const emailNotification = require('./middleware/nodemail')

console.log('le server tourne')

//Créer l'application avec le framework express
const app = express()

//Configurer l'application pour qu'elle se branche sur le port 3000
app.set('port', process.env.PORT || 3000)

//Créer un serveur avec la fonction internet http qui fonctionne avec l'application nommée "app"
const server = http.createServer(app)

//Déclencher l'écoute du serveur
server.listen(process.env.PORT || 3000)

// Middleware pour traiter les données JSON
app.use(express.json())

//TODO: Changer l'astérix lorsque le nom de domaine sera connu
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
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

app.post('/form', emailNotification, sendSMS, (req, res, next) => {
    console.log("je suis dans app.use de l'envoi de la réponse au client")
    console.log('req.body', req.body)
    res.status(200).json({
        message:
            'Le formulaire a été envoyé avec succès, je reviens vers vous rapidement.',
    })
})

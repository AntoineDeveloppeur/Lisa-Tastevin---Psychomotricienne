const express = require('express')
const http = require('http')
require('dotenv').config({ path: './.env' })
const sendSMS = require('./middleware/sms')
const emailNotification = require('./middleware/nodemail')

console.log('le server tourne')

//Créer l'application avec le framework express
const app = express()

//Configurer l'application pour qu'elle se branche sur le port 3000
app.set('port', 3000)

//Créer un serveur avec la fonction internet http qui fonctionne avec l'application nommée "app"
const server = http.createServer(app)

//Déclencher l'écoute du serveur
// TODO : faire une version local car je ne suis pas sûr que ça fonctionne
const port = 3000
app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:${port}`)
})

// Middleware pour traiter les données JSON
app.use(express.json())

//TODO: Changer l'astérix lorsque le nom de domaine sera connu
app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        '46.200.123.123'
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

//TODO: Ajouter "sendSMS" et "emailNotification" pour la production
// en production:
app.post('/', (req, res, next) => {
    //en local : app.post('/form', (req, res, next) => {
    console.log("je suis dans app.use de l'envoi de la réponse au client")
    console.log('req.body', req.body)
    res.status(200).json({
        message:
            'Le formulaire a été envoyé avec succès, je reviens vers vous rapidement.',
    })
})

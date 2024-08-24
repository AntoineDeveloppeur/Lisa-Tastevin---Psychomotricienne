const express = require('express')
const http = require('http')

console.log('le server tourne')

const app = express()
app.set('port', process.env.PORT || 3000)

const server = http.createServer(app)

server.listen(process.env.PORT || 3000)

// Middleware pour traiter les données JSON
app.use(express.json())

//Changer l'astérix lorsque le nom de domaine sera connu
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

app.post('/form', (req, res, next) => {
    console.log("je suis dans app.use de l'envoi de la réponse au client")
    console.log('req.body', req.body)
    res.status(200).json({ message: 'bravo vous avez lancé une requête' })
})

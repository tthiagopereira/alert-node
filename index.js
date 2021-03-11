const express = require('express')
const bodyParser = require('body-parser')
const open = require('open');
const notifier = require('node-notifier');

const app = express()
app.use(bodyParser.json())

app.listen('3000', () => {
    console.log('Servidor iniciado em http://localhost:3000')
})

app.post('/alert', (req, res) => {
    console.log(req.body)
    console.log('https://web.whatsapp.com/')
    res.send('Post executado com sucesso')
    open('https://web.whatsapp.com/');
    notifier.notify(req.body);
    
} )

app.get('/', (req, res)=> res.send('Servidor rodando'))
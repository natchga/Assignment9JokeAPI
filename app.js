const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const jokes = require('./jokes')

app.use(express.json())

app.use(express.static('public'))

const root = path.join(__dirname, 'public')
app.get('/', (req, res) => {
    res.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (req, res) => {
    const r = Math.floor(Math.random() * jokes.length)
    res.send(jokes[r])
})

app.listen(port, () => console.log(`Listening on port: ${port}`))

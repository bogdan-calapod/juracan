const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Welcome to 🌀 Juracan!'))

app.listen(80, () => console.log('Listening on 80'))

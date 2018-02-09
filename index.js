const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Welcome to 🌀 Juracan!'))

app.listen(PORT, () => console.log('Listening on ' + PORT))

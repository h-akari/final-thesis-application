const express = require('express')
const app = express()
const port = 3000

const dotenv = require('dotenv').config()

app.use('/api/blinji', require('./router/router'))

app.listen(port, () => console.log('Server started on ' + port))


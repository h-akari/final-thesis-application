const express = require('express')
const cors = require('cors')

const app = express()


//app.use(express.urlencoded()); //for posting 

// Parse JSON bodies (as sent by API clients)
//app.use(express.json()); //for posting


app.use(cors());
const port = 3000

const dotenv = require('dotenv').config()

app.use('/api/blinji', require('./router/router'))


app.listen(port, () => console.log('Server started on ' + port))


   
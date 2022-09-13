const express = require('express')
const router = require('./router/router')

const app = express()
app.use(express.json())
app.use('/', router)

const port = 8087
app.listen(port, () => console.log(`Server up on port: ${port}`))
const path = require('path');
const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

app.use(express.json())
app.use(cors())

const homeRouter = require('./src/router/home.router')

app.use('/', homeRouter)

app.listen(port, () => {
    console.log(`App is listening port ${port}`)
})
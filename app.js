const express = require('express')
const app = express()
const port = 3003
const data = require('./data.json')
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('public'))

app.get("/data", (req, res, next) => {
  get.status(200).send({ data: data })
})

app.listener(port, () => console.log(`Steven Stars in ${port}`))
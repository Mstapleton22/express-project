const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const stevenuniverse = require('./data.json')
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('public'))

app.get("/", (req, res, next) => {
  res.status(200).send({
    stevenuniverse: stevenuniverse
  })
})

app.get("/:tag", (req, res, next) => {
  const tag = req.params.tag
  if (!stevenuniverse.tags.includes(tag)) {
    res.status(404).send("Sorry that tag does not exist. Please choose from the following: fusion, homeplanetgem, crystalgem, human, queer, fighter, beachcityresident, singer, diamond, empath, internalturmoil")
  } else {
    const matchData = stevenuniverse.characters.filter(character => character.tags.includes(tag))
    res.status(200).send(matchData)
  }
})

app.post("/post", (req, res) => {
  res.status(200).send("Your Steven Stars are Travelling through space to home world!")
})

app.use((req, res, next) => {
  res.status(404).send("Sorry, that is not valide URL.")
})

app.listen(port, () => console.log(`Steven Stars in ${port}`))
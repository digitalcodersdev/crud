const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
require('./src/config/mongoose')
const bodyParser = require('body-parser')
PORT = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to Api' })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
require("dotenv/config")

const crawl = require('./crawl')

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.post('/', async (req, res) => {
  output = await crawl.crawl(req.body.url)
  console.log(output)
  res.send(output)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})
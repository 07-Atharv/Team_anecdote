const connectToMongo = require('./db_connection/connection')
connectToMongo();

const express = require('express')
const cors = require('cors')
const app = express()

const { PORT} = require("./utils/constants")

app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
const connectToMongo = require('./db_connection/connection')
connectToMongo();

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const path = require('path');
const { PORT} = require("./utils/constants")

app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs.html'));
})

app.use('/api/teacher', require("./router/teacher.route"))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
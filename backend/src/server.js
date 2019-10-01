const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes")

const server = express()

mongoose.connect("mongodb+srv://tindev:tindev@tindev-uer41.mongodb.net/tindev?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(3333)
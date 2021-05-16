const cors = require('cors')
const express = require('express')
const app = express()
const tickets = require("./tickets.json")

app.use(cors())

app.use(express.json())

app.get("/clients", function(req, res) {
res.json(tickets)
})

app.listen(3000, function () {
   
})
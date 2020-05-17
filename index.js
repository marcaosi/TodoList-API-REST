const express = require("express")
const app = express()
const routes = require('./app/routes')

app.use(express.json())

app.use(routes)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, (err) => {
    console.log("Ouvindo...")
})
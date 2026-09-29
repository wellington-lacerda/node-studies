const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("<h1> Ola, seja bem vindo ao meu site </h1>")
})
app.post("/dados", (req, res) => {
  const data = req.body
  res.status(200).json({
    message: "tudo ok",
    statusServe: "200"
  })
  console.log(data)
})
app.listen(3000, () => {
  console.log("Servidor ligado em http://localhost:3000")
})
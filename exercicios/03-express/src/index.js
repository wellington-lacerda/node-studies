const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.send("Seja bem vindo ao meu website")
})
app.get("/blog", (req,res) => {
    res.send("This is my blog")
})
app.get("/contato", (req,res) => {
    res.send("entre em contato com @wellington_lacerda.art")
})

app.listen(3000, () => {
    console.log("Seu servidor esta rodando na URL http://localhost:3000")
})

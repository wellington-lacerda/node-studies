const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send("<h1>Wellcome to my website</h1>")
})
app.get("/dados/:nome/:idade/:cor", (req,res) => {
    res.send(req.params)
})

app.listen(3000, () => {
    console.log("servidor ligado em http://localhost:3000")
})

import express from "express"
import cors from "cors"
import { openDb } from "./configDB.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

openDb()

app.get("/", (req, res) => {
  res.status(200).send("tudo ok")
  console.log("página index")
})
app.post("/data", (req, res) => {
  res.status(200).json({
    status: 200,
    dados: "api"
  })
  console.log("Página de dados")
})

app.listen(PORT, () => {
  console.log(` Conectado na porta ${PORT}`)
})
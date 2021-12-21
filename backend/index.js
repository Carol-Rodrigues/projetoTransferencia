require("./config/conexao")

const express = require("express")
const app = express()

const porta = 3000

app.use(express.json())

const rotaTransferencia = require("./rotas")

app.use("/transferencias", rotaTransferencia)

app.listen(porta, () => console.log("Servidor rodando."))
const express = require('express')
const app = express()
const port = 3000

// criando rota padrão ou raiz
app.get('/', (req, res) =>{
    res.send("Curso de Node JS!")
})

// observar a porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
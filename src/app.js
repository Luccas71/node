import express from 'express'
const app = express()

// criando rota padrão ou raiz
app.get('/', (req, res) =>{
    res.send("Curso de Node JS!")
})

export default app
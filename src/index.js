require('dotenv').config()
const express = require('express')
const knex = require('./conexao')
const cors = require('cors')


const app = express()

app.use(cors())

app.use(express.json())

app.get('/', async (req, res) => {
	try {
		const carros  = await knex('carros')
		.insert({ nome, email, senha })
      .returning("*");
	  
	  if (carros.length === 0) {
		return res.status(400).json("Não foi possivel cadastrar o usuario");
	  }
  
	  return res.status(200).json(carros[0]);
		
	} catch (error) {

		return res.status(500).json({mensagem: "Erro do servidor "})
		
	}
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})

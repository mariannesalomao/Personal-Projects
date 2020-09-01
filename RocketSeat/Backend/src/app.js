// Rodar este servidor: node app.js
const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes') // Só um ponto referencie a mesma pasta, pra sair da pasta é dois pontos

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
// app.listen(3333)
module.exports = app

/**
 * Rota / Recurso: Normalmente uma Entidade ou Tabela do Banco
 */

/** Tipos de Parâmetros
 * Query: Parâmetros nomeados enviados na rota após o '?' (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos, '/1', '/:id'
 * Request Body: É o corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 *  Instale nodemon npm install nodemon -D, com a flag -D pra ser só no ambiente de desenvolvimento, vc não precisa fora dela
 *  Vá no package.json e escreva no cript de start: "scripts": { "start": "nodemon app.js" }
 *  Agora execute no terminal npm start
 *  If you want to run it locally instead of globally, you can run it: npx nodemon app.js
 */

//app.get('/') Só a barra é rota raiz da aplicação.
// O que vem depois da barra é o recurso, ex: localhost:3333/users, quero acessar o recurso de usuarios
//app.post('/users', (request, response) => {
  // Query Params => const params = request.query --> Postman: http://localhost:3333/users/?name=Marianne
  // console.log(params) // { name: Marianne } .query retorna oq vc passa na requisição

  // app.get('/users/:id',...
  // Route Params => const params = request.params --> Postman: http://localhost:3333/users/1
  // console.log(params) // { id: '1' }

  // Request Body = > const body = request.body --> Postman: http://localhost:3333/users   body > raw > text: JSON > escreva o JSON
  // console.log(body)

//   return response.json({
//     evento: 'Semana de Acelerar Conhecimentos',
//     alunos: 'Marianne Salomão'
//   })
// })


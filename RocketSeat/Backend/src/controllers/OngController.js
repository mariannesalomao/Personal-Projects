const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = { // São métodos
  async index(request, response) { // async pq eu só vou executar quando todos forem encontrados
    const ongs = await connection('ongs').select('*') // SELECT * FROM...
    return response.json(ongs)
  },

  async create(request, response) {
    const {name, email, whatsapp, city, uf} = request.body // DESTRUCTURING! Separar pra cada entidade ter sua variável separada
    const id = generateUniqueId()
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return response.json({id}) // Tô mandando o id pra pessoa ver
  }
}

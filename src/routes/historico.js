const { Historico } = require('../models/index')

async function routes (fastify, options) {
  fastify.get('/historico/find/:id', async (request, reply) => {
    let result = await Historico.findAll({ where: { ID_CLIENTE: request.params.id } })
    reply.send(result)
  })

  fastify.post('/historico/create', async (request, reply) => {
    try {
      let result = await Historico.create({
        ID_CLIENTE: request.body.id_cliente,
        DATA_PESQUISA: request.body.data_pesquisada,
        ENDERECO_PESQUISADO: request.body.endereco_pesquisado
      })
      reply.status(201).send(result)
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes

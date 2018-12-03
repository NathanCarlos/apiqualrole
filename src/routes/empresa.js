const { Empresa } = require('../models/index')

async function routes (fastify, options) {
  fastify.get('/empresa/find', async (request, reply) => {
    let result = await Empresa.findAll()
    reply.send(result)
  })

  fastify.post('/empresa/create', async (request, reply) => {
    try {
      let result = await Empresa.create({
        NOME_EMPRESA: request.body.nome,
        CNPJ_EMPRESA: request.body.cnpj,
        LOGRADOURO_EMPRESA: request.body.logradouro,
        BAIRRO_EMPRESA: request.body.bairro,
        CIDADE_EMPRESA: request.body.cidade,
        UF_EMPRESA: request.body.uf
      })
      reply.status(201).send(result)
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes

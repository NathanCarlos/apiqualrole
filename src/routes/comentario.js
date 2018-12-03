const { Comentario } = require('../models/index')
const sequelize = require('../services/sequelize')

async function routes (fastify, options) {
  fastify.get('/comentarios/find/:id', async (request, reply) => {
    let result = await sequelize.query('select DISTINCT * from Comentarios c inner join Clientes cli on c.ID_CLIENTE = cli.id where c.ID_EMPRESA = ' + request.params.id + ' group by c.id  order by c.createdAt DESC')
    reply.send(result[0])
  })

  fastify.post('/comentario/create', async (request, reply) => {
    try {
      let result = await Comentario.create({
        ID_CLIENTE: request.body.cliente,
        ID_EMPRESA: request.body.empresa,
        DESCRICAO_COMENTARIO: request.body.descricao,
        DATA_COMENTARIO: request.body.data
      })
      reply.status(201).send(result)
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes

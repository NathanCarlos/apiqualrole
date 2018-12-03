const { Evento } = require('../models/index')

async function routes (fastify, options) {
  fastify.post('/evento/create', async (request, reply) => {
    try {
      let result = await Evento.create({
        ID_EMPRESA: 2,
        NOME_EVENTO: 'Evento na Praça de Alimentação',
        DESCRICAO_EVENTO: 'Vários carrinhos vendendo hot dog baratinho, venha conferir.',
        ENDERECO_EVENTO: 'Parque do Ibirapuera',
        PERFIL_EVENTO: 'Outros',
        HORA_INICIO_EVENTO: '17',
        DT_INICIO_EVENTO: '2018-12-06',
        DT_FIM_EVENTO: '2018-12-06'
      })
      reply.status(201).send(result)
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes

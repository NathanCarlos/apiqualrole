const { Cliente, Preferencia } = require('../models/index')
const md5 = require('md5')
const sequelize = require('../services/sequelize')

async function routes (fastify, options) {
  fastify.get('/cliente/find', async (request, reply) => {
    let result = await Cliente.findAll()
    reply.send(result)
  })
  fastify.get('/cliente/find2', async (request, reply) => {
    let result = await Cliente.findAll()
    reply.send(result)
  })
  fastify.post('/cliente/create', async (request, reply) => {
    try {
      let passwordHashed = md5(request.body.password)
      let result = await Cliente.create({
        NICKNAME_CLIENTE: request.body.nickname,
        SENHA_CLIENTE: passwordHashed,
        NOME_CLIENTE: request.body.nome_cli,
        SOBRENOME_CLIENTE: request.body.sobrenome,
        EMAIL_CLIENTE: request.body.email,
        CIDADE_CLIENTE: request.body.city,
        DT_NASCIMENTO_CLIENTE: request.body.dtnascimento
      })
      let contador = 0
      let object = []
      request.body.preferencia.forEach(element => {
        Preferencia.create({
          ID_CLIENTE: result.id,
          DESCRICAO_PREFENCIA: element
        }).then((retorno) => {
          object[contador] = retorno
          contador++
        }, error => {
          reply.send(error)
        })
      })
      setTimeout(() => {
        reply.status(201).send([result, object])
      }, 6000)
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.put('/cliente/update/:id', async (request, reply) => {
    try {
      let result = await Cliente.update({
        NICKNAME_CLIENTE: request.body.nickname,
        NOME_CLIENTE: request.body.nome_cli,
        SOBRENOME_CLIENTE: request.body.sobrenome,
        EMAIL_CLIENTE: request.body.email,
        CIDADE_CLIENTE: request.body.city,
        DT_NASCIMENTO_CLIENTE: request.body.dtnascimento
      }, { where: { id: request.params.id } })
      reply.status(200).send(result)
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.post('/cliente/auth', async (request, reply) => {
    try {
      let retorno = JSON.stringify(await Cliente.findOne({ where: { EMAIL_CLIENTE: request.body.email } }))
      if (retorno.length > 0) {
        let auth = JSON.parse(retorno)
        if (auth.SENHA_CLIENTE === md5(request.body.password)) {
          let resultPerfil = await await Preferencia.findAll({ where: { ID_CLIENTE: auth.id } })
          reply.status(200).send([auth, resultPerfil])
        } else {
          reply.status(404).send('Usuário ou senha inválidos!')
        }
      }
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.get('/cliente/findbyid/:id', async (request, reply) => {
    try {
      let retorno = await Cliente.findById(request.params.id)
      reply.status(200).send(retorno)
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.get('/cliente/perfil/:id', async (request, reply) => {
    try {
      let retorno = await Preferencia.findAll({ where: { ID_CLIENTE: request.params.id } })
      reply.status(200).send(retorno)
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.get('/cliente/notifications/:preference', async (request, reply) => {
    try {
      let retorno = await sequelize.query(`select DISTINCT * from Eventos as ev inner join Empresas as emp ON ev.ID_EMPRESA =  emp.id where PERFIL_EVENTO in ${request.params.preference} order by ev.DT_INICIO_EVENTO ASC `)
      reply.status(200).send(retorno[0])
    } catch (err) {
      reply.send(err)
    }
  })
  fastify.put('/cliente/update/perfil/:id', async (request, reply) => {
    try {
      let contador = 0
      let object = []
      request.body.preferencia.forEach(element => {
        Preferencia.destroy({
          where: { ID_CLIENTE: request.params.id }
        }).then(() => {
          Preferencia.create({
            ID_CLIENTE: request.params.id,
            DESCRICAO_PREFENCIA: element
          }).then((retorno) => {
            object[contador] = retorno
            contador++
          }, error => {
            reply.send(error)
          })
        })
      })
      setTimeout(() => {
        reply.status(201).send(object)
      }, 5000)
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes

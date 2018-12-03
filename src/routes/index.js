/*
  Implementação de rotas. Cada rota idealmente deve importar e implementar um schema
  para otimização de performance e validação dos dados.
*/

const Cliente = require('./cliente-routes')
const Historico = require('./historico')
const Empresa = require('./empresa')
const Evento = require('./evento')
const Comentario = require('./comentario')

module.exports = {
  Cliente,
  Historico,
  Empresa,
  Evento,
  Comentario
}

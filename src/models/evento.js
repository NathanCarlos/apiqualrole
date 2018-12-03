const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Evento = sqlize.define('Evento', {
  ID_EMPRESA: Sequelize.INTEGER,
  NOME_EVENTO: Sequelize.STRING(100),
  DESCRICAO_EVENTO: Sequelize.STRING(200),
  ENDERECO_EVENTO: Sequelize.STRING(255),
  PERFIL_EVENTO: Sequelize.STRING(30),
  HORA_INICIO_EVENTO: Sequelize.STRING(30),
  DT_INICIO_EVENTO: Sequelize.DATE,
  DT_FIM_EVENTO: Sequelize.DATE
})

module.exports = Evento

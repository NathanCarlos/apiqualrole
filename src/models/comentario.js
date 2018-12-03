const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Comentario = sqlize.define('Comentario', {
  ID_CLIENTE: Sequelize.INTEGER,
  ID_EMPRESA: Sequelize.INTEGER,
  DESCRICAO_COMENTARIO: Sequelize.STRING(255),
  DATA_COMENTARIO: Sequelize.DATE
})

module.exports = Comentario

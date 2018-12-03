const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Preferencia = sqlize.define('Preferencia', {
  ID_CLIENTE: Sequelize.INTEGER,
  DESCRICAO_PREFENCIA: Sequelize.STRING(45)
})

module.exports = Preferencia

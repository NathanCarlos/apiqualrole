const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Tipo_Preferencia = sqlize.define('Tipo_Preferencia', {
  ID_PREFERENCIA: Sequelize.INTEGER,
  DESCRICAO: Sequelize.STRING(15)
})

module.exports = Tipo_Preferencia

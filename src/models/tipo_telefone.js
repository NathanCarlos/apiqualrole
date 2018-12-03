const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Tipo_Telefone = sqlize.define('Tipo_Telefone', {
  ID_TELEFONE: Sequelize.INTEGER,
  DESCRICAO: Sequelize.STRING(10)
})

module.exports = Tipo_Telefone

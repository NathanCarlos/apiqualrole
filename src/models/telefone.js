const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Telefone = sqlize.define('Telefone', {
  ID_EMPRESA: Sequelize.INTEGER,
  TELEFONE: Sequelize.STRING(13)
})

module.exports = Telefone

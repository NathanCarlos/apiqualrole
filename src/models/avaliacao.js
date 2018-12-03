const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Avaliacao = sqlize.define('Avaliacoe', {
  ID_EMPRESA: Sequelize.INTEGER,
  ID_CLIENTE: Sequelize.INTEGER,
  VALOR_AVALIACAO: Sequelize.INTEGER,
  DATA_AVALIACAO: Sequelize.DATE

})

module.exports = Avaliacao

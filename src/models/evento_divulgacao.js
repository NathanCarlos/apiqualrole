const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Evento_Divulgacao = sqlize.define('Evento_Divulgacoe', {
  ID_EVENTO: Sequelize.INTEGER
})

module.exports = Evento_Divulgacao

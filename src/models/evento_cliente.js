const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Evento_Cliente = sqlize.define('Evento_Cliente', {
  ID_EVENTO_DIVULGACAO: Sequelize.INTEGER
})

module.exports = Evento_Cliente

const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Historico = sqlize.define('Historico', {
  ID_CLIENTE: Sequelize.INTEGER,
  DATA_PESQUISA: Sequelize.DATE,
  ENDERECO_PESQUISADO: Sequelize.STRING(255)

})

module.exports = Historico

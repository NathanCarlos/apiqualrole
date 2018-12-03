const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Chat = sqlize.define('Chat', {
  ID_CLIENTE: Sequelize.INTEGER,
  ID_EMPRESA: Sequelize.INTEGER,
  MENSAGEM: Sequelize.STRING(300)
})

module.exports = Chat

const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Cliente = sqlize.define('Cliente', {
  ID_EMPRESA: Sequelize.INTEGER,
  ID_EVENTO_CLIENTE: Sequelize.INTEGER,
  NICKNAME_CLIENTE: { type: Sequelize.STRING(20), unique: true, allowNull: false },
  SENHA_CLIENTE: { type: Sequelize.STRING(50), allowNull: false },
  NOME_CLIENTE: Sequelize.STRING(45),
  SOBRENOME_CLIENTE: Sequelize.STRING(50),
  EMAIL_CLIENTE: { type: Sequelize.STRING(50), unique: true, allowNull: false },
  CIDADE_CLIENTE: Sequelize.STRING(50),
  DT_NASCIMENTO_CLIENTE: Sequelize.DATE
})

module.exports = Cliente

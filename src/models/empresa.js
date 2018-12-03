const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Empresa = sqlize.define('Empresa', {
  NOME_EMPRESA: Sequelize.STRING(100),
  CNPJ_EMPRESA: { type: Sequelize.STRING(15), unique: true, allowNull: false },
  LOGRADOURO_EMPRESA: Sequelize.STRING(255),
  BAIRRO_EMPRESA: Sequelize.STRING(45),
  CIDADE_EMPRESA: Sequelize.STRING(50),
  UF_EMPRESA: Sequelize.STRING(2)
})

module.exports = Empresa

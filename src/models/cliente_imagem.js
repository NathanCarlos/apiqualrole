const sqlize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Cliente_Imagem = sqlize.define('Cliente_Imagen', {
  ID_CLIENTE: Sequelize.INTEGER,
  FOTO_USUARIO: Sequelize.STRING(1000)
})

module.exports = Cliente_Imagem

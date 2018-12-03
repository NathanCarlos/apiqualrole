const Sequelize = require('sequelize')
const sequelize = new Sequelize('_qualrole', 'root', '@Alpha12345678910', {
  host: '129.150.131.174',
  dialect: 'mysql',
  port: '3306',
  pool: {
    max: 4,
    min: 0,
    acquire: 20000,
    idle: 5000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})
// sequelize.sync();
module.exports = sequelize

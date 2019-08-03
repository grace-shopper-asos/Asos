const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: Sequelize.INTEGER,
  productId: Sequelize.INTEGER,
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    defaultValue: 'open'
  }
})

module.exports = Orders

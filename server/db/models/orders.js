const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    defaultValue: 'open'
  }
})

module.exports = Orders

const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    defaultValue: 'open'
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

Orders.prototype.increaseQuantity = function() {
  this.quantity++
}

Orders.prototype.decreaseQuantity = function() {
  this.quantity--
}

module.exports = Orders

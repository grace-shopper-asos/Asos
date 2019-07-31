const Sequelize = require('sequelize')
const db = require('../db')
const {Products} = require('./products')

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
  cart: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
})

Orders.prototype.addToCart = function(id) {
  const addItem = Products.findbyPk(id)
  this.cart.push(addItem)
}
Orders.prototype.deleteFromCart = function(id) {
  const deleteItem = Products.findbyPk(id)
  //remove item from cart array
}

module.exports = Orders

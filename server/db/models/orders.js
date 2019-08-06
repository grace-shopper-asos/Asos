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
  userId: Sequelize.INTEGER,
  productId: Sequelize.INTEGER,
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.cartridge.co.za/wp-content/uploads/woocommerce-placeholder.png'
  }
})

module.exports = Orders

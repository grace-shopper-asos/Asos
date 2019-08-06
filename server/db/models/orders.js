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
    type: Sequelize.DECIMAL(13, 2),
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
  }
})

module.exports = Orders

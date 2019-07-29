const Sequelize = require('sequelize')
const db = require('./database')

const Products = db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.fillmurray.com/640/360'
  },
  price: {
    type: Sequelize.DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
})
module.exports = Students

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
    defaultValue:
      'https://www.cartridge.co.za/wp-content/uploads/woocommerce-placeholder.png'
  },
  // images: {
  //   type: Sequelize.ARRAY(Sequelize.STRING),
  //   validate: {
  //     isUrl: true
  //   },
  //   defaultValue: ['https://www.cartridge.co.za/wp-content/uploads/woocommerce-placeholder.png']
  // },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0
    }
  }
})
Products.prototype.decreaseInventory = function(num) {
  this.inventory = Math.max(this.inventory - num)
  //remove product when 0 from product page or disable add to cart
}
module.exports = Products

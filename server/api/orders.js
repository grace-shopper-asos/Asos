const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

//
//create a new order
router.post('/', async (req, res, next) => {
  console.log('Passport', req.session)
  try {
    // console.log(req.session)
    if (req.session && req.session.passport) {
      const newOrder = await Orders.create({
        userId: req.session.passport.user,
        productId: req.body.id,
        status: 'open'
      })
      res.status(201).send(newOrder)
    }
  } catch (error) {
    next(error)
  }
})

//to delete product from orders table
router.delete('/:productId', async (req, res, next) => {
  try {
    // console.log('DELETE!!!!', req.session)
    const productId = req.params.productId
    if (req.session && req.session.passport) {
      await Orders.destroy({
        where: {
          userId: req.session.passport.user,
          status: 'open',
          productId: productId
        }
      })
      res.status(202).send('item deleted from cart')
    }
  } catch (error) {
    next(error)
  }
})

//get all open orders for the user
router.get('/', async (req, res, next) => {
  try {
    // if (req.session && req.session.passport) {
    console.log('dude wheres my passport!!!!!!', req.user)
    const allorders = await User.findByPk(1, {
      attributes: ['id'],
      include: [
        {
          model: Products,
          attributes: ['id', 'title', 'price']
        }
      ]
    })
    res.status(201).send(allorders)
    // }
  } catch (error) {
    next(error)
  }
})
// {
//   where: {
//     userId: req.session.passport.user,
//     status: 'open'
//   }

// to update quantity in orders table
router.put('/', async (req, res, next) => {
  const productid = req.body.product.id
  try {
    if (req.session && req.session.passport) {
      const existing = await Orders.findOne({
        where: {
          status: 'open',
          productId: productid,
          userId: req.session.passport.user
        }
      })
      existing.increaseQuantity()
      const updated = await existing.update(req.body)
      res.json(updated)

      res.status(201).send(updateQuantity)
    }
  } catch (error) {
    next(error)
  }
})
//also need to include if - or + and if quantity === 0 then delete row from orders tablwe

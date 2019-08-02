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

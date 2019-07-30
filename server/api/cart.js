const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

router.get('/cart', async (req, res, next) => {
  try {
    //this will be for logged in user
    const orderData = await Orders.findOne({
      where: {userId: req.userId}
    })
    const cart = await orderData
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

// router.put('/checkout', async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/guest-checkout', async (req, res, next) => {
//   try {
//   } catch (err) {
//     console.error(err)
//   }
// })

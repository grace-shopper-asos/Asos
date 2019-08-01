const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.session && req.session.passport) {
      const specificUserOrders = await Orders.findAll({
        where: {
          userId: req.session.passport.user,
          status: 'open',
          include: [
            {
              models: Products
            }
          ]
        }
      })
      res.status(200).json(specificUserOrders)
    }
  } catch (err) {
    console.log('Something went wrong', err)
  }
})

// router.get('/cart', async (req, res, next) => {
//   try {
//     //this will be for logged in user
//     const orderData = await Orders.findOne({
//       where: {userId: req.userId}
//     })
//     const cart = await orderData
//     res.json(cart)
//   } catch (err) {
//     next(err)
//   }
// })

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

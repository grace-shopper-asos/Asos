const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.session && req.session.passport) {
      const orders = await Orders.findAll({
        where: {
          userId: req.session.passport.user,
          status: 'open'
        }
      })
      res.status(201).send(orders)
    }
  } catch (error) {
    next(error)
  }
})

// router.get('/', async (req, res, next) => {
//   try {
//     // console.log('Passport', req.session)
//     const orders = await Products.findAll({
//       include: [
//         {
//           model: Orders,
//           where: {
//             userId: req.session.passport.user,
//             status: 'open'
//           },
//           attributes: ['id']
//         }
//       ]
//     })
//     console.log(orders)
//     res.status(201).send(orders)
//   } catch (error) {
//     next(error)
//   }
// })

//route to create a new order for logged in user in orders table
router.post('/', async (req, res, next) => {
  try {
    // console.log(req)
    if (req.session && req.session.passport) {
      const newOrder = await Orders.create({
        userId: req.session.passport.user,
        productId: req.body.id,
        price: req.body.price,
        title: req.body.title,
        imageUrl: req.body.imageUrl
      })
      res.status(201).send(newOrder)
    }
  } catch (error) {
    next(error)
  }
})

//route to delete a product from orders table for logged in user
router.delete('/:orderId', async (req, res, next) => {
  try {
    // console.log('DELETE!!!!', req.session)
    const orderId = req.params.orderId
    const toBeRemoved = await Orders.findByPk(orderId)
    if (req.session && req.session.passport) {
      await Orders.destroy({
        where: {
          userId: req.session.passport.user,
          status: 'open',
          id: orderId
        }
      })
      res.status(202).send(toBeRemoved)
    }
  } catch (error) {
    next(error)
  }
})
//************************************************* */
///// THE below ROUTES ARE STILL IN WORKING PROGRESS!!!!
//************************************************* */

///This route should be able to create a new order on a checkput for guest and should update the order to status 'closed' for signed in user
router.put('/', async (req, res, next) => {
  try {
    if (req.session && req.session.passport) {
      const newOrder = await Orders.update(
        {status: 'closed'},
        {where: {userId: req.session.passport.user}}
      )
      res.status(201).send(newOrder)
    } else {
      const guestOrder = await Orders.create({
        userId: null,
        productId: req.body.id,
        status: 'closed'
      })
      res.status(201).send(guestOrder)
    }
  } catch (error) {
    next(error)
  }
})

///Below Orders are working for getting user orders that are open

//get all products from the 'open' order for the user
// router.get('/all', async (req, res, next) => {
//   try {
//     console.log('Passport', req.session)
//     const orders = await Orders.findAll({
//       where: {
//         userId: req.session.passport.user,
//         status: 'open'
//       },
//       include: [{model: Products}]
//     })
//     res.status(201).send(orders)
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router

const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router
//local storage
//create a new guest order persistant window.localstorage - clear storage after
router.get('/all', async (req, res, next) => {
  try {
    console.log('Passport', req.session)
    const orders = await Orders.findAll({
      where: {
        userId: req.session.passport.user,
        status: 'open'
      },
      include: [{model: Products}]
    })
    res.status(201).send(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    if (req.session && req.session.passport) {
      const cartToReload = await Products.findAll({
        include: [
          {
            model: Orders,
            where: {
              userId: req.session.passport.user,
              status: 'open'
            }
          }
        ]
      })
      res.status(201).send(cartToReload)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req)
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

router.put('/', async (req, res, next) => {
  try {
    if (req.session && req.session.passport) {
      const newOrder = await Orders.update(
        {status: 'open'},
        {where: {userId: req.session.passport.user}}
      )
      res.status(201).send(newOrder)
    } else {
      const guestOrder = await Orders.create({
        userId: null,
        productId: req.body.id,
        status: 'open'
      })
      res.status(201).send(guestOrder)
    }
  } catch (error) {
    next(error)
  }
})

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

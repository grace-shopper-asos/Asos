const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

//create a new guest order
router.post('/guest', async (req, res, next) => {
  try {
    //use req.sesion.id to determine if there is a session for that user
    //check if req.session.cart has been created, if so then we call add to cart method on our orders table
    //otherwise we create an orderId on our table
    const newOrder = await Orders.create({
      status: 'open'
    })
    res.json(newOrder.id)
  } catch (err) {
    next(err)
  }
})

// create a new order
router.post('/:userId', async (req, res, next) => {
  try {
    const newOrder = await Orders.create({
      status: 'open'
    })

    newOrder.setUser(req.params.userId)
    res.json(newOrder.id)
  } catch (err) {
    next(err)
  }
})

///if the order already exists we need a route to add an item to our cart column

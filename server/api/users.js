const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//User routes are used for Admin View

//route to serve all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//route to serve single user
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

//route to delete a user
router.delete('/:userId', async (req, res, next) => {
  const userId = +req.params.userId
  try {
    await User.destroy({where: {id: userId}})
    res.json(userId)
  } catch (err) {
    next(err)
  }
})

//route to add new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    })

    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

//route to update a user
router.put('/:userId', async (req, res, next) => {
  try {
    const {data: user} = await User.update(
      {
        email: req.body.email,
        password: req.body.password
      },
      {
        where: {id: req.params.userId},
        returning: true,
        plain: true
      }
    )
    res.json(user)
  } catch (err) {
    next(err)
  }
})

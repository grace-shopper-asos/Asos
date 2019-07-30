const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

//route to serve all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})
//route to serve single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Products.findOne({
      where: {
        id: req.params.productId
      }
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

//Product routes are used for Admin View

//route to add a new product
router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Products.create({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price
    })

    res.status(201).json(newProduct)
  } catch (err) {
    next(err)
  }
})

//route to update existing product
router.put('/:productId', async (req, res, next) => {
  try {
    const {data: product} = await Products.update(
      {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price
      },
      {
        where: {id: req.params.productId},
        returning: true,
        plain: true
      }
    )
    res.json(product)
  } catch (err) {
    next(err)
  }
})

//route to delete a product
router.delete('/:productId', async (req, res, next) => {
  const productId = +req.params.productId
  try {
    await Product.destroy({where: {id: productId}})
    res.json(productId)
  } catch (err) {
    next(err)
  }
})

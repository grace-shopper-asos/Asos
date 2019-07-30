const router = require('express').Router()
const {Product} = require('../db/products')
module.exports = router

//route to serve all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})
//route to serve single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
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
    const newProduct = await Product.create({
      // name: req.body.name,
      // description: req.body.description,
      // imageUrl: req.body.imageUrl,
      // price: req.body.price,
    })

    res.status(201).json(newProduct)
  } catch (err) {
    next(err)
  }
})

//route to update existing product
router.put('/:productId', isAdmin, async (req, res, next) => {
  try {
    const {data: product} = await Product.update(
      {
        //   name: req.body.name,
        //   description: req.body.description,
        //   imageUrl: req.body.imageUrl,
        //   price: req.body.price,
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

const express = require('express')
const router = express.Router()
const ProductsService = require('../../services/products')

const productService = new ProductsService()

router.get('/hello', (request, response) => {
  response.render('home')
})


router.get('/', async (request, response, next) => {
  try {
    const products = await productService.getProducts()
    response.render('products', {  products })
  } catch (error) {
    next(error)
  }

})


module.exports = router
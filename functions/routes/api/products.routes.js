const router = require('express').Router()
const ProductsService = require('./../../services/products')

const productService = new ProductsService()

router.get('/', async (request, response, next) => {
  try {
    const products = await productService.getProducts()
    console.log('productos: ', products)

    if(products.length == 0){
      response.status(204).send()
    }else{
      response.status(200).send(products)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:name', async (request, response, next) => {
  try {
    const name = request.params.name
    const products = await productService.getProductsByName(name)
    console.log('productos: ', products)

    if(products.length == 0){
      response.status(204).send()
    }else{
      response.status(200).send(products)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
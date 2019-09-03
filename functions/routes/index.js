const router = require('express').Router()
const routerProducts = require('./products.routes')

router.use('/products', routerProducts)

module.exports = router
const router = require('express').Router()
const productServices = ""

router.get('/', (request, response) => {
  response.send('todos los productos')
})

module.exports = router
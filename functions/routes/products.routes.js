const express = require('express')
const router = express.Router()

router.get('/hello', (request, response) => {
  response.render('home')
})


module.exports = router
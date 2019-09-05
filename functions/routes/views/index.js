const router = require('express').Router()
const routerProducts = require('./products.routes')
const admin = require('firebase-admin');

const md_auth = require('./../../middlewares/auth')
// const md_redirect = require('./../../middlewares/redirectHome')

router.use('/products', routerProducts)

router.get('/', md_auth, async (request, response) => {
  response.render('login')
})

router.get('/home', md_auth, async (request, response) => {
  try {
    response.render('home')
  } catch (error) {
    console.log(error)
    response.redirect('/')
  }
})

module.exports = router
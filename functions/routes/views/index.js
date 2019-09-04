const router = require('express').Router()
const routerProducts = require('./products.routes')
const admin = require('firebase-admin');

router.use('/products', routerProducts)

router.get('/', async (request, response) => {
  response.render('login')
})

router.get('/home', async (request, response) => {
  try {
    const idToken = request.cookies.__session || '';
    console.log('cookies: ', JSON.stringify(request.cookies))
    console.log(idToken)
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    let uid = decodedToken.uid;
    response.render('home')
  } catch (error) {
    console.log(error)
    response.redirect('/')
  }
})

module.exports = router
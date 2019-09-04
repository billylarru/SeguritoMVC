const router = require('express').Router()
const admin = require('firebase-admin');
const routerProducts = require('./products.routes')

router.use('/products', routerProducts)

router.post('/sessionLogin', async (request, response) => {
  const body = request.body
  try {
    const { idToken } = body
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    // const options = {maxAge: expiresIn, httpOnly: true, secure: true};  // cuando es productivo
    const options = {maxAge: expiresIn, httpOnly: true, secure: false}; // cuando es desarrollo 
    response.cookie('__session', idToken, options);
    response.end(JSON.stringify({status: 'success'}));
  } catch (error) {
    console.log('error: ', error)
    // return error.message
    response.status(401).send('UNAUTHORIZED REQUEST!');
  }
})

router.post('/sessionLogout', async (request, response) => {
  try {
    response.clearCookie('__session');
    response.redirect('/')
  } catch (error) {
    console.log(error)
    response.redirect('/')
  }
})


module.exports = router
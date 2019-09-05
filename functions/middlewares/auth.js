const admin = require('firebase-admin');

async function authentication(request, response, next){
  try {
    const idToken = request.cookies.__session || '';
    console.log('cookies: ', JSON.stringify(request.cookies))
    console.log(idToken)
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    let uid = decodedToken.uid;
    const path = request.path

    if(path == '/'){
      response.redirect('home')
    }else{
      next()
    }

  } catch (error) {
    console.log(error)

    const path = request.path

    if(path == '/'){
      next()
    }else{
      response.redirect('/')
    }

  }
}

module.exports = authentication
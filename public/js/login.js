// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASIvojyDsp1yJBRd1FVKnM5YBgxfk8LIY",
  authDomain: "segurito-df82e.firebaseapp.com",
  databaseURL: "https://segurito-df82e.firebaseio.com",
  projectId: "segurito-df82e",
  storageBucket: "segurito-df82e.appspot.com",
  messagingSenderId: "180846925633",
  appId: "1:180846925633:web:5e834afcb229cfe2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

$("#btnLogin").click(() => {
  const email = $("#email").val()
  const password = $("#password").val()
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
    // ...
  });
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // window.location.href = 'main'
    console.log('por enviar peticion')
    user.getIdToken(true)
    .then((idToken) => {
      console.log('token obtenido')
      const body = {
        idToken
      }
      axios.post('/api/sessionLogin', body)
      .then((response) => {
        console.log(response.data)
        window.location.href = '/home'
      })
      .catch((error) => {
        console.log(error)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  } else {
    // No user is signed in.
  }
});
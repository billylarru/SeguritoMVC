const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const apiRouter = require('./routes/api')
const viewsRouter = require('./routes/views')
var exphbs  = require('express-handlebars');

app.use(cookieParser())
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', viewsRouter)
app.use('/api', apiRouter)

exports.app = functions.https.onRequest(app)
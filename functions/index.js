const functions = require('firebase-functions');
const express = require('express')
const app = express()
const router = require('./routes')

app.use('/', router)

exports.app = functions.https.onRequest(app)
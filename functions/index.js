const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express')
const app = express()
const router = require('./routes')

admin.initializeApp(functions.config().firebase);

app.use('/', router)

exports.app = functions.https.onRequest(app)
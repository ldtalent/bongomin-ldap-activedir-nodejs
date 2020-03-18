const express = require('express');
const cfenv = require("cfenv")
const bodyParser = require('body-parser')


// initializing node app express  server
const app = express();

/****bodyParser Middleware */
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Serving static files 
app.use(express.static(__dirname + '/Public'));



var appEnv = cfenv.getAppEnv()
// start the server on the given port and binding host, and print
app.listen(appEnv.port, appEnv.bind, () => {
   // url to server when it starts
   console.log("server starting on " + appEnv.url)
})
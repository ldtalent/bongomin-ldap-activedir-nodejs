const bodyParser = require('body-parser');
const express = require('express');
const cfenv = require('cfenv');
const morgan = require('morgan')



// initializing node app express  server
const app = express();



// Importing  the Routes 
const ldapRouter = require('./routes/ldap');
const adRouter = require('./routes/ad');





app.use(express.static(__dirname + '/Public'));


/****bodyParser Middleware */
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Serving static files 


// Routes to the ldap authorization route
app.use('/ldap', ldapRouter);
// Route to the aactive directory route
app.use('/ad', adRouter);



var appEnv = cfenv.getAppEnv()
// start the server on the given port and binding host, and print
app.listen(appEnv.port, appEnv.bind, () => {
   // url to server when it starts
   console.log("server starting on " + appEnv.url)
})
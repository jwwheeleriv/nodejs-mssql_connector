/* *****************************************************************************************
 * Author:  Jay Wheeler (gh@jwiv.com)
 * Date:    08/27/2019
 * Desc:    Express Server Entry point
 * *****************************************************************************************/

// Express Module and App Server Declaration
const express = require('express');
const app = express();

// File System Modules
const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path').path;

// Other Middleware Modules
const bodyParser = require('body-parser');

//Set up environment variables to use throught the app
const envVars = require(appRoot + '/env.js');
envVars.exportEnvVars();


  
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));  //form-urlencoded


/* ******************************************************************************************
 * Routing
 * *****************************************************************************************/

//Define our custom route modules
const db = require('./routes/db')

//Point requests to our custom route modules
app.use('/test', db)
 

/* *****************************************************************************************
 * Making the magic happen.  
 * Set listener for server on designated port 
 * ****************************************************************************************/
const port = 1234
app.listen(port, () => {
  console.log(`Connect to webserver via http://localhost:${port}`)
})
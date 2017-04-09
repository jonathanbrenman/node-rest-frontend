
// BASE SETUP
// =============================================================================

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path       = require("path");
var Sequelize  = require('sequelize');

// DataBase SETUP
// =============================================================================
//require('./config/database.js')(Sequelize); //Uncomment this line after setup config in config/database.js

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// Load Routes
// =============================================================================
var routerApi = express.Router();
var router    = express.Router(); 
require('./routes/api.js')(app,routerApi);
require('./routes/client.js')(app,router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listen on port ' + port);
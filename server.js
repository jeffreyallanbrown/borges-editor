// Required Modules //
const env = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const passport = require('passport');
// // // // // // // // //



// Mongoose MongoDB Connection //
///
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jeffreyallanbrown:LittleDusty2021!@borges.na4zy.gcp.mongodb.net/borges?retryWrites=true&w=majority', mongoOptions)
  .then(() =>  console.log('db connection successful'))
  .catch((err) => console.error(err));
///
// // // // //



// Set Port and Define Routes //
//
const port = process.env.PORT || '3000';
require('./routes/projectsAPI')(app);
require('./routes/auth')(app);
//
// // // // //



// Session Management Middleware //
//
app.use(require('express-session')({
  secret: 'baby everett',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//
// // // // // // // // //




// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(__dirname + '/src/assets'));

// start app ===============================================
app.listen(port);

// shoutout to the user
console.log('Server is listening on port: ' + port);

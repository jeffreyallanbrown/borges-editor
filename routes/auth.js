var express = require('express');
var passport = require('passport');
var User = require('../mongo-schema/userSchema');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

// Passport Configuration //
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// // // // //



module.exports = function(app){

  app.post('/api/login', passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

  app.get('/ping', function(req, res){
    res.status(200).send("pong!");
  });


  // handeling user sign up
  app.post("/api/register", function(req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){
          res.redirect("");
      });
  });
});

}

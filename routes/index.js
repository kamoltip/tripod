const path = require("path");
const router = require("express").Router();
const passport = require('passport');
const Account = require('../models/account');
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;


// router.get('/', function (req, res) {
//     res.render('index', { user : req.user });
// });
//
// router.get('/register', function(req, res) {
//     res.render('register', { });
// });
//
// router.post('/register', function(req, res) {
//     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
//         if (err) {
//             return res.render('register', { account : account });
//         }
//
//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });
//
// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });
//
// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });
//
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });
//
// router.get('/ping', function(req, res){
//     res.status(200).send("pong!");
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const routes = require("./routes");
// const users = require('./routes/users') //may not need this!

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'fighting whale',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets
app.use(express.static("./client/public"));
// Add routes, both API and view
app.use(routes);

const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
// app.get("/api", (req, res) => {
//     res.json({username:'accimes'})
// });
// ******************************************
// Set up promises with mongoose and connect to Mongo with Mongoose
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://admin:tripod@ds117605.mlab.com:17605/heroku_r1s063tw",
  {
    useMongoClient: true
  }
);

const db = mongoose.connection;

db.on("error", function(err){
	console.log("Mongoose Error : " + err);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

// app.get("/activity/api/savePic", function(req,res){
// 	PicDetails.find({})
// 	.exec(function(err,doc){
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			res.send(doc);
// 		};
// 	});
// });

// ******************************************

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"))
// });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const express = require("express");
const bodyParser = require("body-parser");


const mongoose = require("mongoose");
var PicDetails = require("./models/picDetails");

// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Serve up static assets


// Add routes, both API and view
// app.use(routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.static("client/build"));
// app.get("/api", (req, res) => {
//     res.json({username:'accimes'})
// });
// Start the API server

// ******************************************
// Set up promises with mongoose and connect to Mongo with Mongoose
mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://admin:tripod@ds117605.mlab.com:17605/heroku_r1s063tw",
//   {
//     useMongoClient: true
//   }
// );

mongoose.connect("mongodb://admin:tripod@ds117605.mlab.com:17605/heroku_r1s063tw");
var db = mongoose.connection;

db.on("error", function(err){
	console.log("Mongoose Error : " + err);
});

db.once("open", function() {
	console.log("Mongoose connection successful");
});

app.get("/activity/api/savePic", function(req,res){
	PicDetails.find({})
	.exec(function(err,doc){
		if(err) {
			console.log(err);
		}
		else {
			res.send(doc);
		};
	});
});

app.post("/activity/api/savePic", function(req,res){
	var result = {}
		result.pic_url = req.body.pic_url
		result.pic_latitude = req.body.pic_latitude
		result.pic_longitude = req.body.pic_longitude

	var newPic = new PicDetails(result);
	console.log("here......");
	newPic.save(function(err,doc){
		if(err) {
		console.log(err);
	}
	else{
		res.send(doc);
	}
	});
});




// ******************************************

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

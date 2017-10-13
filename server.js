const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client"));
// Add routes, both API and view
// app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://admin:tripod@ds117605.mlab.com:17605/heroku_r1s063tw",
  {
    useMongoClient: true
  }
);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

// app.get("/api", (req, res) => {
//     res.json({username:'accimes'})
// });
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

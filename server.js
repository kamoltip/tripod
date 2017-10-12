const express = require("express");
const bodyParser = require("body-parser");
// const open = require("open");
// open("http://localhost:3001/");
// const mongoose = require("mongoose");
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
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );


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

const mongoose = require('mongoose');

// Connect Database
mongoose.Promise = global.Promise;
mongoose.connect(
process.env.MONGODB_URI || 'mongodb://admin:tripod@ds117605.mlab.com:17605/heroku_r1s063tw',
  // process.env.MONGODB_URI || 'mongodb://localhost/tripod',
  { useMongoClient: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, '# Mongo DB: connection error:'));
db.once('open', () => {
  console.log('Mongoose connection successful');
});

module.exports = db;

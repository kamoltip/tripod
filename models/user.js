const mongoose = require('mongoose');

const { Schema } = mongoose;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  email: String,
  agree: String,
  pin: String,
});

User.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

module.exports = mongoose.model('User', User);

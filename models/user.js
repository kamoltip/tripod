const mongoose = require('mongoose');

const { Schema } = mongoose;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  agree: String,
});

User.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

module.exports = mongoose.model('User', User);

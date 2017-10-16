const mongoose = require('mongoose');

const { Schema } = mongoose;

const picDetailsSchema = new Schema({
  pic_url: { type: String, required: true },
  pic_title: String,
  pic_description: String,
  pic_latitude: String,
  pic_longitude: String,
  pic_user_id: String,
  pic_date: { type: Date, default: Date.now },
  pic_public_id: String,
});

const PicDetails = mongoose.model('PicDetails', picDetailsSchema);

module.exports = PicDetails;

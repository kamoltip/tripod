const db = require("../models");
// app.post("/activity/api/savePic", function(req,res){
// 	var result = {}
// 		result.pic_url = req.body.pic_url
// 		result.pic_latitude = req.body.pic_latitude
// 		result.pic_longitude = req.body.pic_longitude
//
// 	var newPic = new PicDetails(result);
// 	console.log("here......");
// 	newPic.save(function(err,doc){
// 		if(err) {
// 		console.log(err);
// 	}
// 	else{
// 		res.send(doc);
// 	}
// 	});
module.exports = {
  create: function(req, res) {
    const input = {}
      input.pic_url = req.body.pic_url;
      input.pic_latitude = req.body.pic_latitude;
      input.pic_longitude = req.body.pic_longitude;

    const newPic = new db.PicDetails(input);
  	newPic.save((err, doc) => {
    }).then(dbModel => res.json(dbModel))
  	  .catch(err => res.status(422).json(err));
    },
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

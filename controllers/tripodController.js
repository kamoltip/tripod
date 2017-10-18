const db = require('../models');

module.exports = {
  create(req, res) {
    const input = {};
    input.pic_url = req.body.pic_url;
    input.pic_latitude = req.body.pic_latitude;
    input.pic_longitude = req.body.pic_longitude;
    input.pic_public_id = req.body.pic_public_id;

    const newPic = new db.PicDetails(input);
    newPic.save((err, doc) => {})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll(req, res) {
    db.PicDetails
      .find(req.query)
      .sort({ data: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
            // .where({ pic_public_Id : "find id from login"})
  },

  findById(req, res) {
    db.PicDetails
      .findById(req.params.id)
      .sort({ data: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update(req, res) {
    db.PicDetails
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove(req, res) {
    db.PicDetails
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err));
  },
};

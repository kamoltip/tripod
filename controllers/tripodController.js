const db = require('../models');

module.exports = {
  create(req, res) {
    const input = {};
    input.pic_url = req.body.pic_url;
    input.pic_latitude = req.body.pic_latitude;
    input.pic_longitude = req.body.pic_longitude;

    const newPic = new db.PicDetails(input);
    newPic.save((err, doc) => {})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll(req, res) {
    db.Book.find(req.query).sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.Book.findOneAndUpdate({
      _id: req.params.id,
    }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

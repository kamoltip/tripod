const router = require('express').Router();
const tripodController = require('../../controllers/tripodController');


// Matches with "/api/activity"
router.route('/')
  .get(tripodController.findAll)
  .post(tripodController.create);


// Matches with "/api/activity/:id"
router.route('/:id')
  .get(tripodController.findById)
  .put(tripodController.update)
  .delete(tripodController.remove);

module.exports = router;

const router = require("express").Router();

const tripodRoutes = require("./tripodRoutes");

router.use("/activity", tripodRoutes);

module.exports = router;

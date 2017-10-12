const router = require("express").Router();

cost tripodRoutes = require("./tripodRoutes");

router.use("/activity",tripodRoutes);

module.exports = router;
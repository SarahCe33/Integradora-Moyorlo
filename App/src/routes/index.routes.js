const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderEmergencia, renderSabiasque } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/emergencia", renderEmergencia);
router.get("/sabiasque", renderSabiasque);
module.exports = router;
const express = require("express");
const router = express.Router();

// Controller
const {
  renderLlamada
} = require("../controllers/llamada.controller");

router.get("/videollamada", renderLlamada);
module.exports = router;
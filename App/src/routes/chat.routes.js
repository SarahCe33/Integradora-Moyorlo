const express = require("express");
const router = express.Router();

// Controller
const {
  renderChat
} = require("../controllers/chat.controller");

router.get("/chat", renderChat);
module.exports = router;
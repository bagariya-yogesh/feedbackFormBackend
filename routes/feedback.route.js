const express = require("express");
const router = express.Router();
const {
  getAllFeedback,
  postFeedback,
} = require("../controller/feedback.controller");

router.get("/feedback", getAllFeedback);
router.post("/feedback", postFeedback);

module.exports = router;

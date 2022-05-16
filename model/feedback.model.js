const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
  },
  feedback: {
    type: String,
  },
  rating: {
    type: Number,
  },
  feedbackCategory: {
    type: String,
  },
});

const model = mongoose.model("Feedback", schema);
module.exports = model;
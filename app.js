const express = require("express");
const app = express();
const feedbackRouter = require("./routes/feedback.route");
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", feedbackRouter);

module.exports = app;
const feedbackService = require("../service/feedback.service");
const Feedback = new feedbackService();

const getAllFeedback = async (req, res) => {
  const allFeedback = await Feedback.allFeedback();
  res.send(allFeedback);
};

const postFeedback = async (req, res) => {
  const { body } = req;
  const feedback = await Feedback.saveFeedback(body);
  res.send(feedback);
};

module.exports = {
  getAllFeedback,
  postFeedback,
};

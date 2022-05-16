const feedbackModel = require("../model/feedback.model");

class FeedbackService {
  saveFeedback = async (data) => {
    try {
      const feedback = await feedbackModel.create(data);
      return feedback;
    } catch (e) {
      return "Something went wrong!";
    }
  };

  allFeedback = async () => {
    try {
      const feedback = await feedbackModel.find();
      return feedback;
    } catch (e) {
      return "Something went wrong!";
    }
  };
}

module.exports = FeedbackService;
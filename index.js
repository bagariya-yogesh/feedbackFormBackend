const app = require("./app");
const mongoose = require("mongoose");
const PORT = 8082;
const MONGODB =
  "mongodb+srv://feedback:Feedback@feedbacks.9mwvu.mongodb.net/feedback?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Connected to MONGODB Server", MONGODB);
  })
  .catch((e) => {
    console.log("Unable to connect DB", e);
  });

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});

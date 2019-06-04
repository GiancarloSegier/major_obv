const mongoose = require("mongoose");

const StorySchema = mongoose.Schema(
  {
    title: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Story", StorySchema);

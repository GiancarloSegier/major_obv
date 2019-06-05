const mongoose = require("mongoose");

const StorySchema = mongoose.Schema(
  {
    title: String,
    name: String,
    tag: Object,
    location: String,
    age: Number,
    personality: Object,
    gender: String,
    head: Number,
    eyes: Number,
    nose: Number,
    mouth: Number,
    story: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Story", StorySchema);

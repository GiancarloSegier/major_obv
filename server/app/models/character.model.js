const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema(
  {
    name: String,
    nickname: String,
    about: String,
    story: Object,
    facebook: String,
    twitter: String,
    instagram: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Character", CharacterSchema);

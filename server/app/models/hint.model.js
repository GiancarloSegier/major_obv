const mongoose = require("mongoose");

const HintSchema = mongoose.Schema(
  {
    hint: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Hint", HintSchema);

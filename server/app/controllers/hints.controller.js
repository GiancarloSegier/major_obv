const Hint = require("../models/hint.model.js");

exports.create = (req, res) => {
  const hint = new Hint({
    hint: req.body.hint
  });

  hint
    .save()
    .then(hint => res.send(hint))
    .catch(err => {
      res.status(500).send({ error: err.hint || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const hints = await Hint.find();
    res.send(hints);
  } catch (err) {
    res.status(500).send({ err: err.hint || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const hint = await Hint.findOne({
      _id: req.params.hintId
    });
    if (hint) {
      res.send(hint);
    } else {
      res.status(404).send("No hint found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

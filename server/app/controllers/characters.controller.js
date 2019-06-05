const Character = require("../models/character.model.js");

exports.findAll = async (req, res) => {
  try {
    const characters = await Character.find();
    res.send(characters);
  } catch (err) {
    res.status(500).send({ err: err.character || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const character = await Character.findOne({
      _id: req.params.characterId
    });
    if (character) {
      res.send(character);
    } else {
      res.status(404).send("No character found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

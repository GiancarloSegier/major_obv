const Story = require("../models/story.model.js");

exports.create = (req, res) => {
  const story = new Story({
    title: req.body.title
  });

  story
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({ error: err.story || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const stories = await Story.find();
    res.send(stories);
  } catch (err) {
    res.status(500).send({ err: err.story || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.storyId
    });
    if (story) {
      res.send(story);
    } else {
      res.status(404).send("No story found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("name mag niet leeg zijn");
  }

  try {
    const story = await Story.findOneAndUpdate(
      {
        _id: req.params.storyId
      },
      {
        title: req.body.title
      },
      {
        new: true
      }
    );

    if (!story) {
      return res.status(404).send("No story found");
    }
    res.send(story);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const story = await Story.findOneAndRemove({
      _id: req.params.storyId
    });
    if (!story) {
      return res.status(404).send("No story found");
    }
    res.send(story);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

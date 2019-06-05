const Story = require("../models/story.model.js");

exports.create = (req, res) => {
  const story = new Story({
    title: req.body.title,
    name: req.body.name,
    tag: req.body.tag,
    location: req.body.location,
    age: req.body.age,
    personality: req.body.personality,
    gender: req.body.gender,
    head: req.body.head,
    eyes: req.body.eyes,
    nose: req.body.nose,
    mouth: req.body.mouth,
    story: req.body.story
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

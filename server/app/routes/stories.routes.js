module.exports = app => {
  const controller = require("../controllers/stories.controller.js");
  app.post("/api/stories", controller.create);
  app.get("/api/stories", controller.findAll);
  app.get("/api/stories/:storyId", controller.findOne);
  app.put("/api/stories/:storyId", controller.update);
  app.delete("/api/stories/:storyId", controller.delete);
};

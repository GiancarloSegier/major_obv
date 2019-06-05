module.exports = app => {
  const controller = require("../controllers/characters.controller.js");
  app.post("/api/characters", controller.create);
  app.get("/api/characters", controller.findAll);
  app.get("/api/characters/:characterId", controller.findOne);
};

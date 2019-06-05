module.exports = app => {
  const controller = require("../controllers/characters.controller.js");
  app.get("/api/characters", controller.findAll);
  app.get("/api/characters/:characterId", controller.findOne);
};

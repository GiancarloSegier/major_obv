module.exports = app => {
  const controller = require("../controllers/hints.controller.js");
  app.post("/api/hints", controller.create);
  app.get("/api/hints", controller.findAll);
  app.get("/api/hints/:hintId", controller.findOne);
};

const express = require("express");

const dashRouter = express.Router();

dashRouter.get("/", (req, res) => {
  res.render("index");
});

module.exports = dashRouter;

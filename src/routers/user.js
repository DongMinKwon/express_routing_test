//user setting
const users = {
  15: {
    nickname: "bar",
  },
  16: {
    nickname: "foo",
  },
};

const express = require("express");
const userRouter = express.Router();

//parameter setting
userRouter.param("id", (req, res, next, value) => {
  req.user = users[value];
  next();
});

//user routing
userRouter.get("/", (req, res) => {
  res.send("user page");
});

userRouter.get("/:id", (req, res) => {
  const resType = req.accepts(["json", "html"]);

  if (resType === "json") {
    res.send(req.user);
  } else if (resType === "html") {
    res.render("user-profile", {
      userNickname: req.user.nickname,
    });
  }
});

userRouter.post("/:id/nickname", (req, res) => {
  const { user } = req;
  const { nickname } = req.body;

  user.nickname = nickname;
  res.send(`User nickname updated : ${nickname}`);
});

module.exports = userRouter;

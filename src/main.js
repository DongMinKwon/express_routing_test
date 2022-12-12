const express = require("express");
const router = require("./routers");

const app = express();

const PORT = 5000;

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static file serving
app.use("/public", express.static("src/public"));

//view templete 설정
app.set("view engine", "pug");
app.set("views", "src/views");

//router setting
app.use("/", router.dashRouter);
app.use("/users", router.userRouter);

//error handling
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500;
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at Port : ${PORT}`);
});

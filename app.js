const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/connectDB");
const topicRouter = require("./src/modules/topic/topic.route");
const catRouter = require("./src/modules/category/category.route");
const routerUser = require("./src/modules/user/user.route");
const commentRouter = require("./src/modules/comment/comment.route");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));

app.use("/api/topic", topicRouter);
app.use("/api/category", catRouter);
app.use("/api/user", routerUser);
app.use("/api/comment", commentRouter);
connectDB();

app.get("/", (req, res) => {
  res.send("I am from Bangladesh");
});

app.listen(port, () => {
  console.log("my port is", port);
});

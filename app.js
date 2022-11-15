const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const { db } = require("./models");

const { db, Page, User } = require("./models");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await Page.sync;
};

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

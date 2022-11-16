const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const path = require("path");

const { db, Page, User } = require("./models");
const {
  ModelBuildPage,
} = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");
const PORT = 3000;

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
  await Page.sync();
  await User.sync();

  // make sure that you have a PORT constant
};

module.exports = app;
init();

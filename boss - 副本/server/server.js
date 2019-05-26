const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./user.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", UserRouter);

app.listen(9093, function() {
  console.info("web service start");
});

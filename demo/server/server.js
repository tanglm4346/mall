const express = require("express");

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/test";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.info("mongobd connected  success");
});

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    sex: { type: String, require: true },
    duty: { type: String, require: true }
  })
);
//const UserDao = require("./dao/User");

// User.create({
//   name: "react",
//   age: 23
// });
const app = express();
app.listen(9093, () => {
  console.log("web service is running");
});
//返回html的代码
app.get("/", (res, req) => {
  req.send("<h1>HelloWorld</h1>");
});

//返回json
app.get("/data", (res, req) => {
  User.find({}, (err, doc) => {
    console.info("doc", doc);
    req.json(doc);
  });
});
app.get("/data2", (res, req) => {
  User.find({ name: "react" }, (err, doc) => {
    console.info("doc", doc);
    req.json(doc);
  });
});
app.get("/data2", (res, req) => {
  User.find({ name: "react" }, (err, doc) => {
    console.info("doc", doc);
    req.json(doc);
  });
});
app.get("/data3", (res, req) => {
  User.remove({ name: "react" }, (err, doc) => {
    console.info("doc", doc);
    req.json(doc);
  });
});
app.get("/update", (res, req) => {
  User.update({ name: "tanglm" }, { age: 65 }, (err, doc) => {
    console.info("doc", doc);
    req.json(doc);
  });
});

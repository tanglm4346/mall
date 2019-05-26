const express = require("express");
const { getModel } = require("./model");
const { buildSuccessResult, buildFailResult } = require("./result");
const utils = require("utility");

const Router = express.Router();
const Chat = getModel("chat");
Router.get("/list", (req, res) => {
  let { to } = req.query;
  console.info(to);
  Chat.find({ $or: [{ to }, { from: to }] }, (err, doc) => {
    if (!err) {
      return res.json(buildSuccessResult(doc));
    } else {
      return res.json(buildFailResult("后端出错了"));
    }
  });
});

Router.post("/read", (req, res) => {
  let { to, from } = req.body;
  console.info(to);
  Chat.updateMany({ to, from }, { $set: { read: true } }, (err, doc) => {
    if (!err) {
      Chat.find({ $or: [{ to }, { from: to }] }, (err, doc) => {
        if (!err) {
          return res.json(buildSuccessResult(doc));
        } else {
          return res.json(buildFailResult("后端出错了"));
        }
      });
    } else {
      return res.json(buildFailResult("后端出错了"));
    }
  });
});

module.exports = Router;

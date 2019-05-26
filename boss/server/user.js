const express = require("express");
const { getModel } = require("./model");
const { buildSuccessResult, buildFailResult } = require("./result");
const utils = require("utility");

const Router = express.Router();
const User = getModel("user");

Router.get("/list", (req, res) => {
  let { type } = req.query;
  User.find({ type }, { password: 0 }, (err, doc) => {
    return res.json({ code: 1, data: doc });
  });
});

Router.get("/info", (req, res) => {
  let { username, id } = req.query;
  let condition = {};
  if (username) {
    condition = { username: username };
  }
  if (id) {
    condition = Object.assign(condition, { _id: id });
  }
  User.findOne(condition, { password: 0 }, (err, doc) => {
    return res.json({ code: 1, data: doc });
  });
});

Router.post("/register", (res, req) => {
  let { username, password, type } = res.body;
  User.find({ username }, (err, doc) => {
    if (!err) {
      if (doc && doc.length > 0) {
        req.json(buildFailResult("用户名已存在"));
      } else {
        User.create({ username, type, password: md5(password) }, (err, doc) => {
          if (!err) {
            req.json(buildSuccessResult());
          } else {
            req.json(buildFailResult("后端出错了"));
          }
        });
      }
    } else {
      req.json(buildFailResult("后端出错了"));
    }
  });
});
Router.post("/login", (req, res) => {
  let { username, password } = req.body;
  User.findOne(
    { username, password: md5(password) },
    { password: 0 },
    (err, doc) => {
      if (!err) {
        if (doc) {
          res.json(buildSuccessResult(doc));
        } else {
          res.json(buildFailResult("用户名或密码错误"));
        }
      } else {
        res.json(buildFailResult("后端出错了"));
      }
    }
  );
});
Router.post("/update", (req, res) => {
  let { username, avatar, desc, title, company, money } = req.body;
  User.update(
    { username },
    { avatar, desc, title, company, money },
    (err, doc) => {
      if (!err) {
        console.log("doc", doc);
        res.json(buildSuccessResult(doc));
      } else {
        res.json(buildFailResult("后端出错了"));
      }
    }
  );
});

function md5(password) {
  const salt = "talHHqweW@@@!@#*(-123121289080";
  return utils.md5(password + salt);
}
module.exports = Router;

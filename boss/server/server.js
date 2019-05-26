const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./user.js");
const ChatRouter = require("./chat.js");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const { getModel } = require("./model");
const Chat = getModel("chat");

io.on("connection", socket => {
  console.log("user is on channel");
  socket.on("send", data => {
    let { to, from, msg } = data;
    console.log("data", data);
    Chat.create({ to, from, content: msg }, (err, doc) => {
      console.log(doc);
      io.emit("receive", Object.assign({}, doc._doc));
    });
  });
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", UserRouter);
app.use("/chat", ChatRouter);

server.listen(9093, function() {
  console.info("web service start");
});

const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/test";
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.connection.on("connected", function() {
  console.info("db is connected");
});

const models = {
  user: {
    username: { type: String, require: true },
    password: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    desc: { type: String },
    title: { type: String },
    company: { type: String },
    money: { type: String }
  },
  chat: {
    to: { type: String, require: true },
    from: { type: String, require: true },
    read: { type: Boolean, default: false },
    createTime: { type: Number, default: new Date().getTime() },
    content: { type: String, require: true }
  }
};
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};

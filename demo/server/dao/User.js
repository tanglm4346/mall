const mongoose = require("./../mongoDB");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    sex: { type: String, require: true },
    duty: { type: String, require: true }
  })
);

module.exports = {
  getUsers: function() {
    User.find("user", (err, doc) => {
      console.info("doc", doc);
      return doc;
    });
  }
};

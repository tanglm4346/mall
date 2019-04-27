const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/test";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.info("mongobd connected  success");
});

module.exports = mongoose;

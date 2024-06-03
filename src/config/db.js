const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.DB_URI;

const dbConnect = () => {
  mongoose
    .connect(DB_URI, {
      dbName: "creative_task_01",
    })
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;

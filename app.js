const express = require("express");
const configApp = require("./src/config/config");
const dbConnect = require("./src/config/db");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

dbConnect();
configApp(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const user_router = require("../routes/userRoutes");
const product_router = require("../routes/productRoutes");
const authenticate = require("../middleware/auth");

const configApp = (app) => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/auth", user_router);
  app.use("/api/product", authenticate, product_router);
};

module.exports = configApp;

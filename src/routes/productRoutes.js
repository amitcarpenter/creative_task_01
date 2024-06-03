const express = require("express");
const upload = require("../utils/fileUpload");

const {
  create_product,
  get_all_product,
  get_single_prduct_by_id,
  update_product_by_id,
  delete_product_by_id,
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", upload.array("images"), create_product);

router.get("/get-all", get_all_product);

router.get("/:id", get_single_prduct_by_id);

router.put("/update/:id", upload.array("images"), update_product_by_id);

router.delete("/delete/:id", delete_product_by_id);

module.exports = router;

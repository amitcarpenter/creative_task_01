const Product = require("../models/Product");

// Create Product
const create_product = async (req, res) => {
  const { name, quantity, price } = req.body;
  const images = req.files.map((file) => `/uploads/${file.filename}`);
  try {
    const product = new Product({
      name,
      quantity,
      price,
      images,
      userId: req.userId,
    });
    await product.save();
    return res
      .status(201)
      .json({ message: "Product created SuccessFully", product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Product
const get_all_product = async (req, res) => {
  try {
    const products = await Product.find({ userId: req.userId });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get Single Product by ID
const get_single_prduct_by_id = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Product by ID
const update_product_by_id = async (req, res) => {
  const { name, quantity, price } = req.body;
  const images = req.files.map((file) => `/uploads/${file.filename}`);
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { name, quantity, price, images },
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res
      .status(200)
      .json({ message: "product updated successfully ", product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Product by id
const delete_product_by_id = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!product)
      return res
        .status(404)
        .json({ error: "Product not found Or User Not authenticated" });
    return res.status(200).json({ message: "Product deleted SuccessFully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create_product,
  get_all_product,
  get_single_prduct_by_id,
  update_product_by_id,
  delete_product_by_id,
};

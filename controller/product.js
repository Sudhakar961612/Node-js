const fs = require("fs");
const model = require("../models/product");

const Product = model.ram;

// Create
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const doc = await product.save();
    console.log({ err: null, doc });
    res.status(201).json(doc);
  } catch (err) {
    console.log({ err, doc: null });
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
// one product Read
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

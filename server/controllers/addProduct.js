const product = require(`../models/product`);

const createProduct = async (req, res) => {
  try {
    const {
      name,
      additionalInfo,
      description,
      fabric,
      color,
      origin,
      fabricCode,
      season,
      pattern,
      types,
      price,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const image = req.file.path;

    console.log(
      name,
      additionalInfo,
      description,
      image,
      fabric,
      color,
      origin,
      fabricCode,
      season,
      pattern,
      types,
      price
    );

    if (
      !name ||
      !additionalInfo ||
      !description ||
      !image ||
      !fabric ||
      !color ||
      !origin ||
      !fabricCode ||
      !season ||
      !pattern ||
      !types ||
      !price
    )
      return res.status(400).json({ message: "product wrong" });

    const newProduct = new product({
      name,
      additionalInfo,
      description,
      image,
      fabric,
      color,
      origin,
      fabricCode,
      season,
      pattern,
      types,
      price,
    });
    console.log(newProduct);

    await newProduct.save();
    res.status(200).json({ message: "product has been created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "product cannot be created" });
  }
};

module.exports = { createProduct };

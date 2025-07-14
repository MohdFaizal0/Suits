const express = require(`express`);
const { createProduct } = require(`../controllers/addProduct`);
const router = express.Router();
const uploads = require(`../utils/multerConfig`);

router.post("/product", uploads.single("image"), createProduct);

module.exports = router;

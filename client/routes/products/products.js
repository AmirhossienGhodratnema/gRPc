const { ListProduct, CreateProducts } = require('../../controllers/productController');

const router = require('express').Router();

router.get('/list', ListProduct);
router.get('/create', CreateProducts);

module.exports = {
    productRouter: router
}
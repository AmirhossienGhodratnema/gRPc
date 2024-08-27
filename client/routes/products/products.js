const { ListProduct, CreateProducts, GetProductId } = require('../../controllers/productController');

const router = require('express').Router();

router.get('/list', ListProduct);
router.get('/create', CreateProducts);
router.get('/get', GetProductId);

module.exports = {
    productRouter: router
}
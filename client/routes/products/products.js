const { ListProduct, CreateProducts, GetProductId, DistroyProduct } = require('../../controllers/productController');

const router = require('express').Router();

router.get('/list', ListProduct);
router.get('/create', CreateProducts);
router.get('/get', GetProductId);
router.get('/distroy', DistroyProduct);

module.exports = {
    productRouter: router
}
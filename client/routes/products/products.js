const { ListProduct, CreateProducts, GetProductId, DistroyProduct, UpdateProduct } = require('../../controllers/productController');

const router = require('express').Router();

router.get('/list', ListProduct);
router.get('/create', CreateProducts);
router.get('/get', GetProductId);
router.get('/distroy', DistroyProduct);
router.get('/update', UpdateProduct);

module.exports = {
    productRouter: router
}
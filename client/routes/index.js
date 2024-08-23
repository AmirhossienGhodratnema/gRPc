const router = require('express').Router();

const { productRouter } = require('./products/products')

router.use('/product', productRouter)

module.exports = {
    AllRouter: router
}
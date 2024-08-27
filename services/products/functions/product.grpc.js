const { Products } = require('./../models/product')

async function listProduct(call, callback) {
    try {
        const products = await Products.find({});
        callback(null, { products })
    } catch (error) {
        callback(error, null);
    }
}


async function createProduct(call, callback) {
    try {
        const { title, price } = call.request;
        await Products.create({ title, price });
        callback(null, { status: 'Create' });
    } catch (error) {
        callback(error, null);
    }
}


async function getProductId(call, callback) {
    try {
        const { id } = call.request;
        const product = await Products.findOne({ id });
        callback(null, product);
    } catch (error) {
        callback(error, null);
    };
};

async function distrodyProductId(call, callback) {
    try {
        const { id } = call.request;
        const product = await Products.deleteOne({ id });
        if (product.deletedCount == 0) return callback(null, { status: 'Not found' })
        callback(null, { status: 'Distroy' });
    } catch (error) {
        callback(error, null);
    };
};



module.exports = {
    listProduct,
    createProduct,
    getProductId,
    distrodyProductId,
}
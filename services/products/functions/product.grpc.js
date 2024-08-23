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
        const {title, price} = call.request;
        await Products.create({ title, price });
        callback(null, { status: 'Create' });
    } catch (error) {
        callback(error, null);
    }
}


module.exports = {
    listProduct,
    createProduct,
}
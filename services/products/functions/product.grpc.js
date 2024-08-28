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

async function updateProduct(call, callback) {
    try {
        const { id, title, price } = call.request;
        console.log(title, price)
        const product = await Products.updateOne({ id }, { $set: { title, price } });
        console.log('Product update in product gRPC');
        callback(null, { status: 'Updated' });
    } catch (error) {
        callback(error, null);
    };
};


module.exports = {
    listProduct,
    createProduct,
    getProductId,
    distrodyProductId,
    updateProduct,
}

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const product = require('../../services/products/models/product');
const protoPath = path.join(__dirname, '..', '..', 'protos', 'product.proto');
const productProtoPath = protoLoader.loadSync(protoPath)
const { productPackage } = grpc.loadPackageDefinition(productProtoPath);
const productServiceUrl = 'localhost:4001';
const productClient = new productPackage.ProductService(productServiceUrl, grpc.credentials.createInsecure())

function ListProduct(req, res) {
    productClient.listProduct(null, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

function CreateProducts(req, res) {
    const { title, price } = req.query;
    productClient.createProduct({ title, price }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

function GetProductId(req, res) {
    const { id } = req.query;
    productClient.getProductId({ id }, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

function DistroyProduct(req, res) {
    const { id } = req.query;
    productClient.distrodyProductId({ id }, (err, data) => {
        console.log('client', data)
        if (err) return res.json(err);
        return res.json(data);
    });
};

module.exports = {
    ListProduct,
    CreateProducts,
    GetProductId,
    DistroyProduct,
}
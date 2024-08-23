require('./config/mongoConnection');

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const protoPath = path.join(__dirname, '..', '..', 'protos', 'product.proto');
const productProto = protoLoader.loadSync(protoPath);
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productServiceUrl = 'localhost:5000';
const { listProduct } = require('./functions/product.grpc');


function main() {
    const server = new grpc.Server();
    server.addService(productPackage.ProductService.service, {
        listProduct
    });
    server.bindAsync(productServiceUrl, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) return console.log('Err product server: ',err.message);
        console.log('gRPC product service runnin to port', port)
    });
};
main()
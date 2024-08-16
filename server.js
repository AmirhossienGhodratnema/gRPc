const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const echoProto = protoLoader.loadSync("echo.proto", {});
const echoDefinition = grpc.loadPackageDefinition(echoProto);
const { echoPackage } = echoDefinition;
const serverUrl = "localhost:5000";
const server = new grpc.Server();

function EhchoUnary(call, callback) { };
function EchoClientStream(call, callback) { };
function EchoServerStream(call, callback) { };
function BidiStream(call, callback) { };

server.addService(echoPackage.EchoService.service, {
    EhchoUnary,
    EchoClientStream,
    EchoServerStream,
    BidiStream,
});

server.bindAsync(serverUrl, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Failed to bind server:', err);
    } else {
      console.log('Server bound to port:', port);
    }
  });
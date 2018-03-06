module.exports = {};

const dgram = require('dgram');
const udp_server = dgram.createSocket('udp6');

const PORT = 5679;



//when socket is ready and listening for datagram msgs
udp_server.on('listening', function () {
    var address = udp_server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

//on new datagram msg
udp_server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port + ' - ' + message);
    
});

//module.exports.start = function(env) {
    udp_server.bind(PORT, 'aaaa::1');
//};

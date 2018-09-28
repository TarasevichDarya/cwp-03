const net = require('net');
const fs = require('fs');
const path = require('path');

let pathFor = [];
for(let r = 2; r < process.argv.length; r++)
{
    pathFor[r-2] = process.argv[r];
}
const connect = {host: "127.0.0.1", port: 3001};
let files = [];

const client = new net.Socket();
client.setEncoding('utf8');

client.connect(connect, function () {
    console.log('Connected');
    readFiles();
    client.write('FILES');
});
client.on('error', (err) => {
    console.error(err);
});
client.on('close', function () {
    console.log('Connection closed');
});
client.on('data', function (data) {
    if (data === 'ASC' || data === 'NEXT') {
        sendFiles();
    }
    if (data === 'DEC') {
        console.log('Server is dec');
        client.destroy();
    }

});

function sendFiles() {
    
}

function readFiles() {
    
}
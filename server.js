// server.js
const net = require('net');
const fs = require('fs');


const connect = {host: "127.0.0.1", port: 3001};
let seed = 0;
let Clients = [];

let questions = [];
let correct = [];
let incorrect = [];
let buffFile = [];
let buffName = [];
getJSON();

const server = net.createServer(function (client) {

        client.setEncoding('utf8');
        client.on('error', (err) => {
            console.error(err);
        });
        client.on('data', function (data) {

            
        });
        client.on('data', function (data) {

            
        });
        client.on('data',function (data) {
            
        });
        client.on('end', function () {
           
        });
    })
;
server.maxConnections = process.env.maxClients;
server.listen(connect, () => {
    console.log(`Server listening on localhost:${connect.host}:${connect.port}`);
    console.log(process.env.pathSave.toString());
});

function getJSON() {
    fs.readFile('qa.json', function (err, data) {
        if (err) console.log('Error in read JSON');
        else {
            let json = JSON.parse(data);
            for (let i = 0; i < json.length; i++) {
                questions[i] = json[i].question;
                correct[i] = json[i].correct;
                incorrect[i] = json[i].incorrect;
            }
        }
    })
}

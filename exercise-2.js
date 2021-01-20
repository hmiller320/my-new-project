const http = require('http'); 
const emoji = require("node-emoji");

let coffee = emoji.get('coffee');

const server = http.createServer((req, res) => {
    res.write(coffee);
    res.end();
});

server.listen(8001);
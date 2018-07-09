const http = require('http');
const fs = require('fs');
const config = require('./config.json');

const hostname =  process.argv[2] || process.env.NODE_ADDR || config.address;
const port =  process.argv[3] || process.env.NODE_PORT || config.port;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) {
        if(err){
            res.writeHead(404);
            res.write('File not found');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
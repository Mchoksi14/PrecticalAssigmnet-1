const http = require('http');
const url = require('url');
const static = require('node-static');

const fileServer = new static.Server('./q2.html');

var server = http.createServer(function (req, res) {
console.log('ma');
    var u1 = url.parse(req.url, true);
    console.log(u1.pathname);
    if (u1.pathname == "/") {
        fileServer.serve(req, res);
    }
    else if (u1.pathname == "/gethello" && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
    
        
        // Convert the response object to JSON and send it
        res.write(JSON.stringify({'msg':"hello nodejs !!"}));
        res.end();
    }

    //request.



}).listen(8000);



console.log("Listening on port number 8000");
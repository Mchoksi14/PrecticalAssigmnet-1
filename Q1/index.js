const http = require('http');
const url = require('url');
const static = require('node-static');

const fileServer = new static.Server('./Q1.html');

var server = http.createServer(function (req, res) {

    var u1 = url.parse(req.url, true);
    console.log(u1.pathname);
    if (u1.pathname == "/") {
        fileServer.serve(req, res);
    }
    else if (u1.pathname == "/process" && req.method === 'GET') {

        console.log('hello');
        res.write(u1.query.email + " " + u1.query.password)
        res.write('hello')
        res.end();
    }
    else if (u1.pathname == "/process" && req.method == 'POST') {
        console.log('hello');
        let body = '';
        //req.on("data",chunk=>{} )
        req.on('data', chunk => {
            console.log(chunk);
            body += chunk.toString(); 
        });
        req.on('end', () => {
            console.log(body);
            res.end('OutPut Post   => ' + body);
        });
    }



}).listen(8000);



console.log("Listening on port number 8000");
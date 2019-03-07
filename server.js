'use strict';

const http = require('http');
const PORT = 8877;

http.createServer(function (request, response) {
    const result = request.headers.cookie ? {
        code: 0,
        cookie: request.headers.cookie,
    } : {
        code: 1,
        msg: 'no cookie',
    };

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(result));
}).listen(PORT);

console.log('Server running at http://127.0.0.1:%d/', PORT);

// 1st Project Description - Parsing Requests & Sending Responses ✔️
// First node.js project in order to understand the basic core modules

// Project Description
// Spin up a node.js server.
// Handle 2 routes. One "/" and another "/users". Return some greeting text on the first and return a list of dummy users on the second.
// Add a form with a "username" input to the "/" and sumbit a post request to "/create-user" upon a button click.
// Add "/create-user" route and parse the incoming data.

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Parsing Requests & Sending Responses Practice</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Requests & Responses</title></head>');
        res.write('<body><ul><li>George</li><li>Dummy User</li><li>Another Dummy User</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);
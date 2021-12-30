const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    /// === means if the variable has value and equal
    if (url === '/') {
        res.write(`<html>
        <head>
            <title>Enter Message</title>
        <head>
        <body>
            <form action="/create-users" method="POST">
                <input type="text" name="username"><button type="submit">Send Username</button>
            </form>
        </body>
    </html>`)
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
    }
    if (url === '/create-users' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            return res.end();
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head>
            <title>Enter Message</title>
        <head>
        <body>
            <h1>Hello from Node.js Server!</h1>
            <ul><li>User 1</li></ul>
        </body>
    </html>`)
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
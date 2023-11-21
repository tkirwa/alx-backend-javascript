const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        try {
            await countStudents(process.argv[2]);
            res.end();
        } catch (error) {
            res.end(error.message);
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});

app.listen(1245);

module.exports = app;

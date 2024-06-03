const http = require('http');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

function now() {
    var d = new Date();
    return {
        year: d.getFullYear(),
        month: zeroFill(d.getMonth() + 1),
        date: zeroFill(d.getDate()),
        hour: zeroFill(d.getHours()),
        minute: zeroFill(d.getMinutes())
    };
}

let server = http.createServer((req, res) => {
    if (req.url === '/api/currenttime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(now()) + '\n');
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(now()) + '\n');
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Time server running on http://localhost:${PORT}/`);
});

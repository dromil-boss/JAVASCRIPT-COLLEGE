const http = require("http");

const server = http.createServer((req, res) => {
    // Routing
    if (req.method === "GET" && req.url === '/') {
        res.end("Get Request");
    } else if (req.method === "POST" && req.url === "/") {
        res.end("POST Request");
    }
});

server.listen(3000, () => {
    console.log("Server is running on PORT: 3000");
});
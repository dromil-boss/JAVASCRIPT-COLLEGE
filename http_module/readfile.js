const http = require('http');
const fs = require('fs'); // File read/write karne ke liye File System module

const server = http.createServer((req, res) => {
    
    // fs.readFile( 'file_ka_naam' , callback_function )
    fs.readFile('index.html', (err, data) => {
        if (err) {
            // Agar file nahi mili ya error aayi
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Internal Server Error: File not found");
        } else {
            // Agar file successfully read ho gayi
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data); // Ye 'data' variable browser ko puri HTML file bhej dega
        }
    });

});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:3000");
});
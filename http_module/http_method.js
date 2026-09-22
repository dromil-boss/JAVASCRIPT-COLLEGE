import http from 'http';
const server=http.createServer((req,res) =>{
    console.log("server is created")
});
server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:4000");})

 res.writeHead(200, {
        "Content-Type": "text/plain",
        "custom-header": "Hello ECE"
    });

    
    res.end(JSON.stringify(order));
});

fs.readfile("config.json ," "utf-8")
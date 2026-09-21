const http = require('http'); 
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log("hello world");
    
    
    const order = {
        orderId: 10987,
        des: "Delhi",
        source: "Ghaziabad", 
        username: "Dromil" 
    };

    
    res.writeHead(200, {
        "Content-Type": "application/json",
        "custom-header": "Hello ECE"
    });

    
    res.end(JSON.stringify(order));
});

server.listen(3000, "127.0.0.1", () => {  
    console.log("Server is running on http://127.0.0.1:4000");
});

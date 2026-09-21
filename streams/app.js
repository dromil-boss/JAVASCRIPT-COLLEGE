


const fs = require("fs");


const readStream = fs.createReadStream("input.txt"); 

readStream.on("data", (chunk) => {
    console.log("Data Received");
    console.log("Data:", chunk);
});
  

readStream.on("end", ()=>{
    console.log("END")
})
readStream.on("error", (error)=>{
    console.log("Error: ", error.message)
})


// create writable stream
const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")



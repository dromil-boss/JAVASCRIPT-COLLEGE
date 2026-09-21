const fs = require("fs")
// callback based method

// create a file
fs.writeFile("notes.txt", "ECE-A", (err) => {
    if (err) {
        console.log (err);
    }
        console.log ("Data successfully written in the file notes.txt")
})

fs.readFile ("notes.txt" , "utf8" , (err , data ) => {
    if (err) {
        console.log (err)
        return
    }
    console.log (data);

})
// update file
const updateData = " hello ECE-A",
fs.appendFile("notes.txt" , updateData, (err) => {
    if(err) {
        console.log (err);
        return;
    }
    console.log ("File Updated Successfully");
})






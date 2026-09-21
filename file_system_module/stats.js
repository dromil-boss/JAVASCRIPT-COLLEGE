// const fs = require("fs"); 
// const { bytes } = require("stream/consumers");

// fs.stat("notes.txt", (err,stats) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Information about [notes.txt]", typeof(stats))
//     console.log ("size of the file [notes.txt]" , stats.size, "Bytes")
//     console.log ("Creation time of the file [notes.txt]" , stats.birthtime.toISOString().split("T")[0])
//     console.log("Last modifcation time of the file [notes.txt]")

// })

fs.stat ("./myFolder1" , (err ,stats) => {
    if (err) {
        console.log(err) ;
        return
    }
    console.log (stats.size);
})

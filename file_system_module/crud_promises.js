import fs from 'fs/promises'
function readFileContent (filename) {
    const data = awaits readFile(filename , "utf8")
    console.log (data);

}
readFileContent("notes.txt")  
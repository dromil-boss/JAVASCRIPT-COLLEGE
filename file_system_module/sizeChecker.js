const fs = require("fs");

function sizeChecker(filename) {
    const limit = 2 * 1024 * 1024;
    const stats = fs.statSync(filename);

    if (stats.size > limit) {
        console.log("File should be less than 2 MB");
    } else {
        console.log("File has been submitted");
    }
}

sizeChecker("notes.txt");
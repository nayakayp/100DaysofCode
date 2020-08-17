const fs = require("fs");

var readMe = fs.readFileSync("myText.txt", "utf8");
fs.writeFileSync("writeMe.txt", readMe);
console.log(readMe);

var http = require("http");
var fs = require("fs");

var myReadSteram = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
myReadSteram.on("data", function (chunk) {
  console.log("new chunk received");
  myWriteStream.write(chunk);
});

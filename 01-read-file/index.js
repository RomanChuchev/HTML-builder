const fs = require("fs");
const path = require("path");

let text = fs.readFileSync(path.join("01-read-file", "text.txt"), "utf8");
console.log(text);

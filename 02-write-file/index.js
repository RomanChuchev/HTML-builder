const fs = require("fs");
const path = require("path");
const { stdin, stdout, exit } = require("process");

const stream = new fs.createWriteStream(
  path.join(__dirname, "text.txt"),
  "utf-8"
);

stdout.write("Hello! Type the text...\n");

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    finish();
  }
  stream.write(data);
});

process.on("SIGINT", finish);

function finish() {
  stdout.write("Good bye!");
  exit();
}

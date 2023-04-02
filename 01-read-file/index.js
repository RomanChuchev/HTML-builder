const fs = require("fs");
const path = require("path");
const { log, error } = require("console");

const stream = new fs.ReadStream(path.join(__dirname, "text.txt"), "utf-8");

stream.on("data", (chunk) => log(chunk));

stream.on("error", (err) =>
  err.code === "ENOENT" ? log("Файл не найден") : error(err)
);

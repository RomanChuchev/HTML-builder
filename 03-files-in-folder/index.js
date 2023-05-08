const fs = require("fs/promises");
const path = require("path");
const { stdout } = require("process");

fs.readdir(path.join(__dirname, "secret-folder"), { withFileTypes: true }).then(
  (results) => {
    results.forEach((result) => {
      if (!result.isDirectory()) {
        const filePath = path.join(__dirname, "secret-folder", result.name);
        const fileName = path.basename(filePath);
        const ext = path.extname(filePath);

        fs.stat(filePath).then((res) => {
          stdout.write(
            `${fileName.replace(ext, "")} - ${fileName.replace(
              ".",
              ""
            )} - ${Number(res.size / 1024)}kb\n`
          );
        });
      }
    });
  }
);

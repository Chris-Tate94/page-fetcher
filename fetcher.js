const url = process.argv[2];
const filePath = process.argv[3];
const request = require("request");
const fs = require("fs");

request(`${url}`, (error, response, body) => {
  fs.writeFile(`${filePath}`, url, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes at ${filePath}`);
  });
});

const axios = require("axios");
const Args = process.argv;
const fs = require("fs");
const path = require("path");
process.stdin.on("data", function(chunk) {
  const result = chunk
    .toString()
    .split("\r\n")
    .map((val, index) => solution(val, index + 1));
});
async function solution(url, index) {
  try {
    const html = await axios.get(url);
    fs.writeFile(path.join(__dirname + `/${index}.html`), html.data, err => {
      if (!err) console.log(`${index}.html`);
      else console.log(err);
    });
  } catch (error) {
    console.error(error);
  }
}

// solution("https://www.google.com");

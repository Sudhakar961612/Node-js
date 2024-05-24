const lib = require("./lib.js");

const express = require("express");

const server = express();
server.listen(8080);

console.log("heloo word how are you");

// const fs = require("fs");

// const t1 = performance.now();
// const txt = fs.readFileSync("demo.txt", "utf-8");
// console.log(txt);
// console.log(lib.sum(4, 5), lib.diff(9, 5));
// console.log(t1);

// const t2 = performance.now();
// const txt2 = fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });
// console.log(lib.sum(4, 5), lib.diff(9, 5));
// console.log(t2);

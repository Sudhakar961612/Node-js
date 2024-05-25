const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");

const morgan = require("morgan");

const server = express();

server.use(morgan("default"));

// server.use((req, res, next) => {
//   console.log(req.method, req.ip, req.hostname, new Date(), req.get("User-Agent"));
//   next();
// });

// bodyParser
server.use(express.json());

// server.use(express.urlencoded());

server.use(express.static("public")); // stati middleware

const auth = (req, res, next) => {
  // console.log(req.query);

  // if (req.body.password == "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }

  next();
};

// server.use(auth; application middleware

//API - Endpoint -Route

server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
  //   res.status(201).send("<h1>hello</h1>");
  // res.sendFile("");
  // res.json(products);
  // res.sendStatus(404);
});

server.listen(8080, () => {
  console.log("server started");
});

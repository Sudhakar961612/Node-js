require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
console.log("env", process.env.DB_PASSWORD);

// db connection code
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/hlo");
  console.log("database connectd");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server.use(morgan("default"));
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR)); // stati middleware
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// MVC model-view-controller

// Create POST /products C R U D
// Read GET /products
//Read Get /products/:id
// Update PUT /products/:id
// Update PATCH /products/:id
// Delete DELETE /products/:id

server.listen(process.env.PORT, () => {
  console.log("server started");
});

// helloo

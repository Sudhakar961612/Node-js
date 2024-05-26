const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

// bodyParser
server.use(morgan("default"));
server.use(express.json());
server.use(express.static("public")); // stati middleware
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// MVC model-view-controller

// Create POST /products C R U D
// Read GET /products
//Read Get /products/:id
// Update PUT /products/:id
// Update PATCH /products/:id
// Delete DELETE /products/:id

server.listen(8080, () => {
  console.log("server started");
});

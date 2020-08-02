const express = require("express");
require("dotenv").config();
const staticMiddleware = require("./static-middleware");

const server = express();

server.use(staticMiddleware);

server.get("/api", (req, res, next) => {
  res.json({ message: "Server is working" });
});

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server is lisening on port " + process.env.SERVER_PORT);
});

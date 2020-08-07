const express = require("express");
require("dotenv").config();
const staticMiddleware = require("./static-middleware");
const db = require("./database");

const server = express();

server.use(staticMiddleware);

server.get("/api/server-check", async (req, res, next) => {
  // res.json({ message: "Server is working" });
  try {
    const result = await db.query(
      `SELECT 'Successfully queried the DB' as "message"`
    );
    res.json(result.rows[0]);
    await db.end();
  } catch (error) {
    next(error);
  }
});

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server is lisening on port " + process.env.SERVER_PORT);
});

import "reflect-metadata";
import express from "express";
import cors = require("cors");

(async () => {
    // const connectionOptions: ConnectionOptions = await getConnectionOptions();
    // createConnection();

  const app = express();

  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(4000, () => {
    console.log("🧙‍♂️ server started on http://localhost:4000");
  });
})();

import "reflect-metadata";
import express from "express";
import cors = require("cors");
import { PostController } from "./controllers/posts.controller";
import {
  createConnection,
  getConnectionOptions,
  useContainer,
} from "typeorm";
import { Container } from "typeorm-typedi-extensions";

(async () => {
  useContainer(Container);
  const connOptions = await getConnectionOptions();
  createConnection(connOptions).then(async () => {
    const app = express();

    app.use(cors());
    app.use("/posts", Container.get<PostController>(PostController).router);

    app.listen(4000, () => {
      console.log("🧙‍♂️ server started on http://localhost:4000");
    });
  });
})();

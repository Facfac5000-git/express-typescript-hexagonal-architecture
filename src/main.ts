import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { MongoDBConn } from "./user/infrastructure/mongoDBConn";
import { userRouter } from "./user/infrastructure/userRouter";

function boostrap() {
  const app = express();
  const mongoDBConn = new MongoDBConn(config.db.conn);
  mongoDBConn.run();

  app.use(bodyParser.json());
  app.use("/users", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();

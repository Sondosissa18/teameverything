import express from "express";
import mongoose from "mongoose";
import Bluebird from "bluebird";
import cors from "cors";
import { staticDirectory, SERVER_PORT, logger, uploadDirectory } from "./helpers.js";

import { registerExpressRoutes } from "./routes/index.js";

const startServer = async () => {
  global.Promise = Bluebird;
  mongoose.Promise = Bluebird;
  await mongoose.connect(`${process.env.MONGO_DB_URL}/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(staticDirectory));
  app.use("/uploads", express.static(uploadDirectory));
  app.use((req, res, next) => {
    next();
  });

  registerExpressRoutes(app);
  app.listen(SERVER_PORT, () => logger.info(`Example app listening at http://localhost:${SERVER_PORT}`));
};

try {
  startServer();
} catch (err) {
  console.error("Server crashed :(", err);
}

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
  // send entire app down.Process manager will restart it
});

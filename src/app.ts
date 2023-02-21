import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
import "reflect-metadata";
import swaggerDocs from "./swagger.json";

import { appRoutes } from "./routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(
  cors({
    origin: "*",
  })
);

appRoutes(app);
app.use(handleErrorMiddleware);

export default app;

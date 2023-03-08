import { Express } from "express";

import adsRoutes from "./ads.routes";
import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";
import addressRoutes from "./address.routes";
import commentsRoutes from "./comment.routes";
import emailRoutes from "./email.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/ads", adsRoutes());
  app.use("/addresses", addressRoutes());
  app.use("/comments", commentsRoutes());
  app.use("/email", emailRoutes());
};

import { Router } from "express";
import { sendEmailController } from "../controllers/email.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
const routes = Router();
const emailRoutes = () => {
  routes.post("", sendEmailController);
  return routes;
};

export default emailRoutes;

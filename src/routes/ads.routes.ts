import { Router } from "express";

import { createAdsController } from "../controllers/ads.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import deleteAdsController from "../controllers/deleteAds.controller";

const routes = Router();

const adsRoutes = () => {
  routes.post("/", authTokenMiddleware, createAdsController);
  // routes.patch("/:id",);
  routes.delete("/:id", authTokenMiddleware, deleteAdsController);
  // routes.get("/",);

  return routes;
};

export default adsRoutes;

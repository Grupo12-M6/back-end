import { Router } from "express";

import {
  createAdsController,
  deleteAdsController,
  isActiveAdsController,
} from "../controllers/ads.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const adsRoutes = () => {
  routes.post("/", authTokenMiddleware, createAdsController);
  // routes.patch("/:id",);
  routes.delete("/:id", authTokenMiddleware, deleteAdsController);
  routes.delete("isActive/:id", authTokenMiddleware, isActiveAdsController);
  // routes.get("/",);

  return routes;
};

export default adsRoutes;

import { Router } from "express";

import {
  createAdsController,
  deleteAdsController,
  isActiveAdsController,
  updateAdsController,
  listAdsController,
  listOneAdController,
} from "../controllers/ads.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const adsRoutes = () => {
  routes.post("/", authTokenMiddleware, createAdsController);
  routes.patch("/:id", authTokenMiddleware, updateAdsController);
  routes.get("/:id", authTokenMiddleware, listOneAdController);
  routes.delete("/:id", authTokenMiddleware, deleteAdsController);
  routes.delete("isActive/:id", authTokenMiddleware, isActiveAdsController);
  routes.get("/", listAdsController);

  return routes;
};

export default adsRoutes;

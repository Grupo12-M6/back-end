import { Router } from "express";

import {
  createAdsController,
  deleteAdsController,
<<<<<<< HEAD
  isActiveAdsController,
=======
  listAdsController
>>>>>>> b94ccf86e489de4b66b9f071c1034b413d35abbe
} from "../controllers/ads.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const adsRoutes = () => {
  routes.post("/", authTokenMiddleware, createAdsController);
  // routes.patch("/:id",);
  routes.delete("/:id", authTokenMiddleware, deleteAdsController);
<<<<<<< HEAD
  routes.delete("isActive/:id", authTokenMiddleware, isActiveAdsController);
  // routes.get("/",);
=======
  routes.get("/", listAdsController);
>>>>>>> b94ccf86e489de4b66b9f071c1034b413d35abbe

  return routes;
};

export default adsRoutes;

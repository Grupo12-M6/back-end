import { Router } from "express";

import { createAdsController } from "../controllers/ads.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const adsRoutes = () => {
    routes.post("/", authTokenMiddleware,  createAdsController);
    // routes.patch("/:id",);
    // routes.delete("/:id",);
    // routes.get("/",);
  
    return routes;
}

export default adsRoutes;
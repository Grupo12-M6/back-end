import { Router } from "express";

import { sessionController } from "../controllers/session.controller";

const routes = Router();

const sessionRoutes = () => {
    routes.post("/", sessionController);
  
    return routes;
}

export default sessionRoutes;
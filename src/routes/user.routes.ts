import { Router } from "express";
import { createUserController, listAdsByUserController } from "../controllers/user.controllers";

const routes = Router();

const userRoutes = () => {
    routes.post("/", createUserController);
    // routes.patch("/:id",);
    // routes.delete("/:id",);
    // routes.get("/",);
    routes.get('/:id/ads', listAdsByUserController)

    return routes;
}

export default userRoutes;
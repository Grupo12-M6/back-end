import { Router } from "express";
import { listAdsByUserController } from "../controllers/users.controller";

const routes = Router();

const userRoutes = () => {
    // routes.post("/", );
    // routes.patch("/:id",);
    // routes.delete("/:id",);
    // routes.get("/",);
    routes.get('/:id/ads', listAdsByUserController)

    return routes;
}

export default userRoutes;
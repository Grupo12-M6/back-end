import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAdsByUserController,
  listOneUserController,
} from "../controllers/user.controllers";

const routes = Router();

const userRoutes = () => {
  routes.post("/", createUserController);
  // routes.patch("/:id",);
  routes.delete("/:id", deleteUserController);
  // routes.get("/",);
  routes.get("/:id", listOneUserController);
  routes.get("/:id/ads", listAdsByUserController);

  return routes;
};

export default userRoutes;

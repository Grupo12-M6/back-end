import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAdsByUserController,
  listOneUserController,
  updateUserController,
} from "../controllers/user.controllers";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const userRoutes = () => {
  routes.post("/", createUserController);
  routes.patch("/:id", authTokenMiddleware, updateUserController);
  routes.delete("/:id", authTokenMiddleware, deleteUserController);
  // routes.get("/",);
  routes.get("/:id", listOneUserController);
  routes.get("/:id/ads", listAdsByUserController);

  return routes;
};

export default userRoutes;

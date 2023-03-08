import { Router } from "express";
import {
  activateUserController,
  createUserController,
  deleteUserController,
  listAdsByUserController,
  listOneUserController,
  resetUserPasswordController,
  sendResetUserPasswordController,
  updateUserController,
} from "../controllers/user.controllers";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const userRoutes = () => {
  routes.post("/", createUserController);
  routes.get("/activate/:token_activation", activateUserController);
  routes.post("/resetPassword", sendResetUserPasswordController);
  routes.patch("/password/:token_reset", resetUserPasswordController);
  routes.patch("/:id", authTokenMiddleware, updateUserController);
  routes.delete("/:id", authTokenMiddleware, deleteUserController);
  routes.get("/:id", listOneUserController);
  routes.get("/:id/ads", listAdsByUserController);

  return routes;
};

export default userRoutes;

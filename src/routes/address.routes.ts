import { Router } from "express";
import {
  // deleteAddressController,
  listAddressByUserController,
  updateAddressController,
} from "../controllers/addresses.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

const addressRoutes = () => {
  routes.patch("/:id", authTokenMiddleware, updateAddressController);
  // routes.delete("/:id", deleteAddressController);
  routes.get("/", authTokenMiddleware, listAddressByUserController);

  return routes;
};

export default addressRoutes;

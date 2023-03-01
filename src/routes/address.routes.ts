import { Router } from "express";
import {
  // deleteAddressController,
  listAddressByUserController,
  updateAddressController,
} from "../controllers/addresses.controller";

const routes = Router();

const addressRoutes = () => {
  routes.patch("/:id", updateAddressController);
  // routes.delete("/:id", deleteAddressController);
  routes.get("/", listAddressByUserController);

  return routes;
};

export default addressRoutes;

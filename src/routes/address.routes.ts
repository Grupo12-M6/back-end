import { Router } from "express";
import {
  createAddressController,
  deleteAddressController,
  listAddressByUserController,
  updateAddressController,
} from "../controllers/addresses.controller";

const routes = Router();

const addressRoutes = () => {
  routes.post("/", createAddressController);
  routes.patch("/:id", updateAddressController);
  routes.delete("/:id", deleteAddressController);
  routes.get("/", listAddressByUserController);

  return routes;
};

export default addressRoutes;

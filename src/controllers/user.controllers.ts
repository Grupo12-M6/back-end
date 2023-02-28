import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { createUserService } from "../services/users/createUser.service";
import { IUserRequest } from "../interfaces/users";
import listAdsByUserService from "../services/ads/listAdsByUser.service";
import { listOneUserService } from "../services/users/listOneUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: IUserRequest = req.body;

  const response = await createUserService(data);

  return res.status(201).json(instanceToPlain(response));
};

const listAdsByUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const ads = await listAdsByUserService(id);

  return res.json(instanceToPlain(ads));
};

const listOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await listOneUserService(id);

  return res.status(200).json(instanceToPlain(response));
};

const deleteUserController = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  await deleteUserService(idUser);

  return res.status(204).json({ message: "User deleted with success!" });
};

export {
  createUserController,
  listAdsByUserController,
  listOneUserController,
  deleteUserController,
};

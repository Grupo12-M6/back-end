import { IAddressRequest } from "./../interfaces/addresses/index";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAddressByUserService from "../services/addresses/listAdressByUser.service";
import updateAddressService from "../services/addresses/updateAdress.service";
import deleteAddressService from "../services/addresses/deleteAdress.service";

const listAddressByUserController = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  const adress = await listAddressByUserService(idUser);

  return res.json(instanceToPlain(adress));
};

const updateAddressController = async (req: Request, res: Response) => {
  const adressData: IAddressRequest = req.body;
  const adressId = req.params.id;
  const updatedAdress = await updateAddressService(adressData, adressId);

  return res.status(200).json(updatedAdress);
};

// const deleteAddressController = async (req: Request, res: Response) => {
//   const idAddress = req.params.id;
//   await deleteAddressService(idAddress);

//   return res.status(204).json({ message: "User deleted with success!" });
// };

export {
  listAddressByUserController,
  updateAddressController,
  // deleteAddressController,
};

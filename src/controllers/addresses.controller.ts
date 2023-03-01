import { IAddressRequest, IAddressUpdate } from "./../interfaces/addresses/index";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAddressByUserService from "../services/addresses/listAdressByUser.service";
import updateAddressService from "../services/addresses/updateAdress.service";
import deleteAddressService from "../services/addresses/deleteAdress.service";

const listAddressByUserController = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  const address = await listAddressByUserService(idUser);

  return res.json(instanceToPlain(address));
};

const updateAddressController = async (req: Request, res: Response) => {
  const addressData: IAddressUpdate = req.body;
  const addressId = req.params.id;

  const updatedAddress = await updateAddressService(addressData, addressId);

  return res.status(200).json(instanceToPlain(updatedAddress));
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

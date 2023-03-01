import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { Address } from "../../entities/address.entity";

const deleteAddressService = async (id: string): Promise<boolean> => {
  const addressRepository = dataSource.getRepository(Address);

  const address = await addressRepository.findOneBy({ id });

  if (!address) {
    throw new AppError("This Address does not exist!", 404);
  }

  await addressRepository.delete(id);

  return true;
};

// Second option for deletion
// create isDelete option on entity

//const deleteAddressService = async (id: string): Promise<boolean> => {
//  const addressRepository = dataSource.getRepository(Address);

//  const address = await addressRepository.findOneBy({ id });

//  if (!address) {
//    throw new AppError("This Address does not exist!", 404);
//  }

//  if (address.isDelete) {
//    throw new AppError("Address has already been deleted!", 404);
//  }

//  await addressRepository.update(id, {
//    isDelete: true,
//  });

//  return true

//};

export default deleteAddressService;

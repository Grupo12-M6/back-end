import { IAddressResponse } from "./../../interfaces/addresses/index";
import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";

import { IAddressRequest } from "../../interfaces/addresses";
import { Address } from "../../entities/address.entity";

export const createAddressService = async ({
  cep,
  state,
  city,
  street,
  number,
  complement,
  userId,
}: IAddressRequest): Promise<IAddressResponse> => {
  const addressRepository = dataSource.getRepository(Address);
  const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found");
  }

  const newAddress = addressRepository.create({
    cep,
    state,
    city,
    street,
    number,
    complement,
    user,
  });

  await addressRepository.save(newAddress);

  const address = await addressRepository.findOneBy({ id: newAddress.id });

  return {
    message: "Created Address",
    data: address,
  };
};

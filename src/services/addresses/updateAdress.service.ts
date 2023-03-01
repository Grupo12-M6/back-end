import { IAddressRequest } from "./../../interfaces/addresses/index";
import dataSource from "../../data-source";

import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Address } from "../../entities/address.entity";

const updateAddressService = async (
  data: IAddressRequest,
  id: string
): Promise<Address> => {
  const { cep, state, city, street, number, complement, userId } = data;

  const addressRepository = dataSource.getRepository(Address);
  const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 403);
  }

  await addressRepository.update(id, {
    cep,
    state,
    city,
    street,
    number,
    complement
  });

  const updatedAddress = await addressRepository.findOneBy({ id });

  const address = await addressRepository.findOneBy({ id });

  return address;
};

export default updateAddressService;

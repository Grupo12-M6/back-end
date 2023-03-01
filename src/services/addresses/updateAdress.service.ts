import { IAddressRequest, IAddressUpdate } from "./../../interfaces/addresses/index";
import dataSource from "../../data-source";

import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Address } from "../../entities/address.entity";

const updateAddressService = async (
  data: IAddressUpdate,
  id: string
): Promise<Address> => {

  const addressRepository = dataSource.getRepository(Address);
  const userRepository = dataSource.getRepository(User);

  // const user = await userRepository.findOne({ where: { id: userId } });


  await addressRepository.update(id, {...data});

  const updatedAddress = await addressRepository.findOneBy({ id });

  return updatedAddress;
};

export default updateAddressService;

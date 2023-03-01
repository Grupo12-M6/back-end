import dataSource from "../../data-source";
import { Address } from "../../entities/address.entity";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listAddressByUserService = async (id: string): Promise<Address[]> => {
  const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      address: true,
    },
  });

  if (!user) {
    throw new AppError("User does not exist!", 404);
  }

  return user.address;
};

export default listAddressByUserService;

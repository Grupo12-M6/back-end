import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";

const deleteUserService = async (id: string): Promise<boolean> => {
  const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("This user does not exist!", 404);
  }

  await userRepository.delete(id);

  return true;
};

export default deleteUserService;

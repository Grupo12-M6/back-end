import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";
import { Ad } from "../../entities/ad.entity";

const deleteUserService = async (id: string): Promise<boolean> => {
  
  const userRepository = dataSource.getRepository(User);
  const adRepository = dataSource.getRepository(Ad);

  const user = await userRepository.findOneBy({ id });
  const ad = await adRepository.find({
    where: {
      user: user
    }
  })

  if (!user) {
    throw new AppError("This user does not exist!", 404);
  }

  if (user.isDelete) {
    throw new AppError("User has already been deleted!", 404);
  }

  await userRepository.update(id, {
    isDelete: true,
  });

  for(let i = 0; i <= ad!.length; i++) {
    await adRepository.update(ad[i].id!, {
      isDelete: true,
    });
  }

  return true;
};

export default deleteUserService;

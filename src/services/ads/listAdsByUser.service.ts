import dataSource from "../../data-source"
import { Ad } from "../../entities/ad.entity"

import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const listAdsByUserService = async (id: string): Promise<Ad[]> => {
  const userRepository = dataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      ads: true,
    },
  })

  if (!user) {
    throw new AppError("User does not exist!", 404)
  }

  return user.ads
}

export default listAdsByUserService

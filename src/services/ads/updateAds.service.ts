import { IAds, IAdsRequest } from "./../../interfaces/ads/index";
import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const updateAd = async (data: IAdsRequest, id: string): Promise<Ad> => {
  const {
    title,
    adType,
    description,
    year,
    price,
    mileage,
    motorType,
    isActive,
    userId,
  } = data;

  const adRepository = dataSource.getRepository(Ad);
  const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 403);
  }

  await adRepository.update(id, {
    title,
    adType,
    description,
    year,
    price,
    mileage,
    motorType,
    isActive,
    user,
  });

  const ad = await adRepository.findOneBy({ id });

  return ad;
};

export default updateAd;

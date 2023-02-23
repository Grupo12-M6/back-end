import { IAds, IAdsRequest } from "./../../interfaces/ads/index";
import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Image } from "../../entities/image.entity";

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
    image,
  } = data;

  const adRepository = dataSource.getRepository(Ad);
  const userRepository = dataSource.getRepository(User);
  const imageRepository = dataSource.getRepository(Image);

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

  const updatedAd = await adRepository.findOneBy({ id });

  for (let i = 0; i < image.length; i++) {
    const newImage = imageRepository.create({
      url: image[i].url,
      ads: updatedAd,
    });

    await imageRepository.save(newImage);
  }

  const ad = await adRepository.findOneBy({ id });

  return ad;
};

export default updateAd;

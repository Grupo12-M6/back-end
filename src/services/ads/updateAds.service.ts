import { IAds, IAdsUpdate } from "./../../interfaces/ads/index";
import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Image } from "../../entities/image.entity";

const updateAd = async (data: IAdsUpdate, id: string): Promise<Ad> => {
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

  const dataAd = {
    title,
    adType,
    description,
    year,
    price,
    mileage,
    motorType,
    isActive,
  }

  const { images } = data;

  const adRepository = dataSource.getRepository(Ad);
  const userRepository = dataSource.getRepository(User);
  const imageRepository = dataSource.getRepository(Image);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 403);
  }

  await adRepository.update(id, {...dataAd});

  const updatedAd = await adRepository.findOneBy({ id });
  console.log(images)
  for (let i = 0; i < images!.length; i++) {

    await imageRepository.update(images[i].id, {
      url: images[i].url,
      ads: updatedAd,
    });
  }

  const ad = await adRepository.findOneBy({ id });

  return ad;
};

export default updateAd;

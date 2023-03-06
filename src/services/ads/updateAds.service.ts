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
  }

  const { images } = data;

  const adRepository = dataSource.getRepository(Ad);
  const userRepository = dataSource.getRepository(User);
  const imageRepository = dataSource.getRepository(Image);

  const user = await userRepository.findOne({ where: { id: userId } });
  const adVar = await adRepository.findOne({ where: { id: id } });
  // const imageAd = await imageRepository.find({where: { ads: {id: id} }})

  if (!user) {
    throw new AppError("User not found", 403);
  }

  await adRepository.update(id, {...dataAd});

  const updatedAd = await adRepository.findOneBy({ id });
  if (images.length == 1) {
    await imageRepository.update(adVar.images[0], {
        url: images[0].url,
        ads: updatedAd
    })
  }
  if (images.length >= adVar.images.length ) {
    for (let i = 0; i < images?.length; i++) {
      if(i < adVar.images.length){
        await imageRepository.update(adVar.images[i], {
            url: images[i].url,
            ads: updatedAd
        })
      } else{
          const newImage = imageRepository.create({
            url: images[i].url,
            ads: updatedAd
        })
        await imageRepository.save(newImage)
      }
    }
  }
  else if (images.length < adVar.images.length ) {
    for (let i = 0; i < adVar?.images.length; i++) {
      if(i < images.length){
        await imageRepository.update(adVar.images[i], {
            url: images[i].url,
            ads: updatedAd
        })
      } else{
        await imageRepository.update(adVar.images[i], {
          url: adVar.images[i].url,
          ads: updatedAd
        })
      }
    }
  } 
  
  const ad = await adRepository.findOneBy({ id });

  return ad;
};

export default updateAd;

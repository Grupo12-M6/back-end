import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { Ad } from "../../entities/ad.entity";

const deleteAdsService = async (id: string): Promise<boolean> => {
  const adRepository = dataSource.getRepository(Ad);

  const ad = await adRepository.findOneBy({ id });

  if (!ad) {
    throw new AppError("This Ad does not exist!", 404);
  }

  if (ad.isDelete) {
    throw new AppError("Ad has already been deleted!", 404);
  }

  await adRepository.update(id, {
    isDelete: true,
  });

  return true
  
};

export default deleteAdsService;
import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { AppError } from "../../errors/appError";

const deleteAds = async (id: string): Promise<void> => {
  const adRepository = dataSource.getRepository(Ad);

  const ad = await adRepository.findOneBy({ id });

  if (!ad) {
    throw new AppError("This Ad does not exist!", 404);
  } else {
    await adRepository.delete(ad);
  }
};

export default deleteAds;

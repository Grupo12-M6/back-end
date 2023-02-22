import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { AppError } from "../../errors/appError";

const isActiveAds = async (id: string): Promise<void> => {
  const adRepository = dataSource.getRepository(Ad);

  const ad = await adRepository.findOneBy({ id });

  if (!ad) {
    throw new AppError("This Ad does not exist!", 404);
  }
  if (ad.isActive === false) {
    throw new AppError("This ad is already inactive", 400);
  }

  await adRepository.update(id, {
    isActive: false,
  });
};

export default isActiveAds;

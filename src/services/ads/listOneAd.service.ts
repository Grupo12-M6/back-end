import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Ad } from "../../entities/ad.entity";

export const listOneAdService = async (id: string): Promise<Ad> => {
  const adsRepository = dataSource.getRepository(Ad);
  const ad = await adsRepository.findOne({ where: { id: id } });
  if (!ad) {
    throw new AppError("Ad not found", 404);
  }
  return ad;
};

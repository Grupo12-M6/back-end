import dataSource from "../../data-source";
import { Ad } from "../../entities/ad.entity";

import { IAdsListResponse } from "../../interfaces/ads";

export const listAdsService = async (): Promise<IAdsListResponse> => {

    const adsRepository = dataSource.getRepository(Ad);
    const ads = await adsRepository.find();

    return {
        message: "Listed all Ads",
        data: ads
    }
};
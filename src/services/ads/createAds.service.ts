import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { Ad } from "../../entities/ad.entity";
import { User } from "../../entities/user.entity";

import { IAdsRequest, IAdsResponse } from "../../interfaces/ads";

export const createAdsService = async ({
    title, adType, year, description, mileage, motorType, price, isActive, userId
}: IAdsRequest): Promise<IAdsResponse> => {
    
    const adsRepository = dataSource.getRepository(Ad);
    const userRepository = dataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    if(!user) {
        throw new AppError("User not found")
    }

    if(!user.isSeller) {
        throw new AppError("You can only create products if you are a seller")
    }

    const newAds = adsRepository.create({
        title, 
        adType, 
        year, 
        description, 
        mileage, 
        motorType, 
        price,
        isActive,
        user
    })

    await adsRepository.save(newAds)

    return {
        message: "Created Announcement",
        data: newAds
    }
}

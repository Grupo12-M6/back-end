import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { Ad } from "../../entities/ad.entity";
import { User } from "../../entities/user.entity";
import { Image } from "../../entities/image.entity";

import { IAdsRequest, IAdsResponse } from "../../interfaces/ads";

export const createAdsService = async ({
    title, adType, year, description, mileage, motorType, price, isActive, userId, images
}: IAdsRequest): Promise<IAdsResponse> => {
    
    const adsRepository = dataSource.getRepository(Ad);
    const userRepository = dataSource.getRepository(User);
    const imageRepository = dataSource.getRepository(Image);

    const user = await userRepository.findOneBy({ id: userId });

    if(!user) {
        throw new AppError("User not found")
    }

    if(!user.isSeller) {
        throw new AppError("You can only create products if you are a seller")
    }

    if(user.isDelete) {
        throw new AppError("user has been deleted")
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

    // console.log(images)
    
    for(let i = 0; i < images?.length; i++) {
        const newImage = imageRepository.create({
            url: images[i].url,
            ads: newAds
        })

        await imageRepository.save(newImage)
    }


    const ad = await adsRepository.findOneBy({ id: newAds.id });

    return {
        message: "Created Announcement",
        data: ad
    }
}

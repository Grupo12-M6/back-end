import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { createAdsService } from "../services/ads/createAds.service";
import { IAdsRequest } from "../interfaces/ads";

const createAdsController = async(req: Request, res: Response) => {
    const data: IAdsRequest = req.body;
    const userId = req.user.id;

    const response = await createAdsService({...data, userId});

    return res.status(201).json(instanceToPlain(response))
}

export {
    createAdsController,
}
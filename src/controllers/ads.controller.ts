import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IAdsRequest } from "../interfaces/ads";

import { createAdsService } from "../services/ads/createAds.service";
import { listAdsService } from "../services/ads/listAds.service";
import deleteAds from "../services/ads/deleteAds.service";


const createAdsController = async(req: Request, res: Response) => {
    const data: IAdsRequest = req.body;
    const userId = req.user.id;

    const response = await createAdsService({...data, userId});

    return res.status(201).json(instanceToPlain(response))
}

const deleteAdsController = async (req: Request, res: Response) => {
    const idAd = req.params.idAd;
    await deleteAds(idAd);
  
    return res.status(204).json();
};

const listAdsController = async (req: Request, res: Response) => {
    const response = await listAdsService()

    return res.status(200).json(instanceToPlain(response))
}

export {
    createAdsController,
    deleteAdsController,
    listAdsController
}
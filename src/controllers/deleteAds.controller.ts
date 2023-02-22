import { Request, Response } from "express";

import deleteAds from "../services/ads/deleteAds.service";

const deleteAdsController = async (req: Request, res: Response) => {
  const idAd = req.params.idAd;
  await deleteAds(idAd);

  return res.status(204).json();
};

export default deleteAdsController;

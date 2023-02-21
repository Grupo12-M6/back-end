import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"

import listAdsByUserService from "../services/ads/listAdsByUser.service"


const listAdsByUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  const ads = await listAdsByUserService(id)

  return res.json(instanceToPlain(ads))
}

export { listAdsByUserController }

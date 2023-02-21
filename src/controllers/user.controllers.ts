import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { createUserService } from "../services/users/createUser.service";
import { IUserRequest } from "../interfaces/users";
import listAdsByUserService from "../services/ads/listAdsByUser.service";

const createUserController = async( req: Request, res: Response ) => {
    const data: IUserRequest = req.body;

    const response = await createUserService(data);

    return res.status(201).json(instanceToPlain(response));
}

const listAdsByUserController = async (req: Request, res: Response) => {
    const id = req.params.id
    const ads = await listAdsByUserService(id)
  
    return res.json(instanceToPlain(ads))
}

export { 
    createUserController, 
    listAdsByUserController 
}
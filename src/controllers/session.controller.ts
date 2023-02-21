import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";

import { sessionService } from "../services/session/session.service";

const sessionController = async(req: Request, res: Response) => {
    const dataLogin: IUserLogin = req.body;

    const token = await sessionService(dataLogin);

    return res.json({ token })
};

export { sessionController }
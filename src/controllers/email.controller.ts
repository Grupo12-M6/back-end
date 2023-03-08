import { Request, Response } from "express";
import { IEmailRequest } from "../interfaces/emails";
import { sendEmailService } from "../services/emails/sendEmail.service";

const sendEmailController = async (req: Request, res: Response) => {
  const { to, subject, text }: IEmailRequest = req.body;
  await sendEmailService({ to, subject, text });
  return res.json({ message: "Email send with sucess" });
};

export { sendEmailController };

import dataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IEmailRequest } from "../../interfaces/emails";
import { sendEmail } from "../../utils/sendEmail.util";

export const activateUserService = async (
  tokenActivation: string
): Promise<void> => {
  const userRepository = dataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { tokenActivation: tokenActivation },
  });

  if (!user) {
    throw new AppError("User not found");
  }

  if (user.active == true) {
    throw new AppError("User already activated");
  }

  await userRepository.update(
    { id: user.id },
    { active: true, tokenActivation: "" }
  );

  const emailData: IEmailRequest = {
    to: user.email,
    subject: "Conta Ativada",
    text: `<h1>Conta ativada com sucesso</h1> <h3>Obrigado por ativar sua conta em nosso site <3 </h3>`,
  };

  await sendEmail(emailData);
};

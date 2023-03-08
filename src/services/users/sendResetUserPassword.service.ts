import dataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IEmailRequest } from "../../interfaces/emails";
import { sendEmail } from "../../utils/sendEmail.util";

export const sendResetUserPasswordService = async (
  email: string,
  protocol: string,
  host: string
): Promise<void> => {
  const userRepository = dataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { email: email },
  });

  if (!user) {
    throw new AppError("User not found");
  }

  const resetPasswordToken = (Math.random() + 1).toString(36).substring(2);

  await userRepository.update(
    { id: user.id },
    { tokenResetPassword: resetPasswordToken }
  );

  const emailData: IEmailRequest = {
    to: email,
    subject: "Reset de senha",
    text: `<h1>Mudança de Senha</h1> <h3>Olá ${user.name}, altere sua senha clicando no link: ${protocol}://${host}/users/password/${resetPasswordToken} </h3>`,
  };

  await sendEmail(emailData);
};

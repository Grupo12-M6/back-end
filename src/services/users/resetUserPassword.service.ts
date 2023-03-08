import dataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IEmailRequest } from "../../interfaces/emails";
import { sendEmail } from "../../utils/sendEmail.util";

import bcrypt from "bcrypt";
export const resetUserPasswordService = async (
  tokenReset: string,
  newPassword: string
): Promise<void> => {
  const userRepository = dataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { tokenResetPassword: tokenReset },
  });

  if (!user) {
    throw new AppError("User not found");
  }

  if (user.tokenResetPassword == "") {
    throw new AppError("Invalid Token");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await userRepository.update(
    { id: user.id },
    { tokenResetPassword: "", password: hashedPassword }
  );
};

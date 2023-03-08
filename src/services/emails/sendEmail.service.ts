import { IEmailRequest } from "../../interfaces/emails";
import { sendEmail } from "../../utils/sendEmail.util";

export const sendEmailService = async ({
  to,
  subject,
  text,
}: IEmailRequest): Promise<void> => {
  const htmlText = `<h1>${subject}</h1><h3>${text}</h3>`;
  await sendEmail({ to, subject, text: htmlText });
};

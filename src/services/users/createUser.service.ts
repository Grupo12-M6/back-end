import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";

import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { Address } from "../../entities/address.entity";

import { sendEmail } from "../../utils/sendEmail.util";
import { IEmailRequest } from "../../interfaces/emails";

export const createUserService = async (
  {
    name,
    email,
    password,
    cpf,
    phoneNumber,
    birthday,
    description,
    address,
    isSeller,
  }: IUserRequest,
  protocol: string,
  host: string
): Promise<IUserResponse> => {
  const userRepository = dataSource.getRepository(User);
  const addressRepository = dataSource.getRepository(Address);

  const users = await userRepository.findOneBy({ email });

  // VERIFICA SE JA EXISTE EMAIL NO DB
  if (users) {
    throw new AppError("Email already exists");
  }

  const verifPassword = password.toString();

  const hashedPassword = await bcrypt.hash(verifPassword, 10);
  const activationToken = (Math.random() + 1).toString(36).substring(2);

  const newAddress = addressRepository.create({
    cep: address.cep,
    state: address.state,
    city: address.city,
    street: address.street,
    number: address.number,
    complement: address.complement,
  });

  await addressRepository.save(newAddress);

  const user = userRepository.create({
    name: name,
    email: email,
    password: hashedPassword,
    cpf: cpf,
    phoneNumber: phoneNumber,
    birthday: birthday,
    description: description,
    isSeller: isSeller,
    address: newAddress,
    active: false,
  });

  const emailData: IEmailRequest = {
    to: email,
    subject: "Ativação da Conta",
    text: `<h1>Ative sua conta</h1> <h3>Seja bem-vindo ${name}, ative sua conta clicando no link: ${protocol}://${host}/users/activate/${activationToken} </h3>`,
  };

  await sendEmail(emailData);

  await userRepository.save(user);

  return {
    message: "Created user",
    data: user,
  };
};

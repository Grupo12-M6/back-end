import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";

import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users";

export const createUserService = async(
    {name, email, password, cpf, phoneNumber, birthday, description, address, isSeller }: IUserRequest
): Promise<IUserResponse> => {
    
    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.findOneBy({ email });

    // VERIFICA SE JA EXISTE EMAIL NO DB
    if(users) {
        throw new AppError( "Email already exists" )
    }
    
    const verifPassword = password.toString()

    const hashedPassword = await bcrypt.hash(verifPassword, 10);

    const user = userRepository.create({
        name: name,
        email: email,
        password: hashedPassword,
        cpf: cpf,
        phoneNumber: phoneNumber,
        birthday: birthday,
        description: description,
        // address: address,
        isSeller: isSeller
    })

    await userRepository.save(user)

    return {
        message: "Created user",
        data: user
    }
}
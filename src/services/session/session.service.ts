import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";

export const sessionService = async({
    email, password
}: IUserLogin): Promise<string> => {

    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ email });

    if(!user) {
        throw new AppError( "Account not found" );
    }

    if (user.isDelete) {
        throw new AppError("User has been deleted!", 404);
    }

    if(!user.password) {
        throw new AppError( "Password not found", 401 );
    }
    if (!bcrypt.compareSync(password.toString(), user.password)){
        throw new AppError("Wrong email/password", 403)
    };

    const token = jwt.sign({email: user.email}, process.env.SECRET_KEY as string, {
        subject: user.id,
        expiresIn: "10h"
    })

    return token
}
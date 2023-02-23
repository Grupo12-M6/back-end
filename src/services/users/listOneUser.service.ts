import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/users";

export const listOneUserService = async(id: string): Promise<IUserResponse> => {

    const userRepository = dataSource.getRepository(User);
    const userSearch = await userRepository.findOne({
        where: {
            id: id
        }
    });

    if(!userSearch) {
        throw new AppError( "User not found", 404)
    }

    return {
        message: "Listed User",
        data: userSearch
    }
}
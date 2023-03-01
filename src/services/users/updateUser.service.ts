import dataSource from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";

export const updateUserService = async (data: IUserUpdate, id: string): Promise<User> => {
    const userRepository = dataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: id})

    if (!user) {
        throw new AppError("User not found", 403);
    }

    await userRepository.update(id, {...data})

    const attUser = await userRepository.findOneBy({id})

    return attUser
}


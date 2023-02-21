import { IAddress } from "../addresses";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    birthday: string;
    description: string;
    isSeller: boolean;
    address?: IAddress; 
    createdAt: Date;
    updatedAt: Date;
};

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    birthday: string;
    description: string;
    address?: IAddress;
    isSeller: boolean;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserResponse {
    message: string;
    data: IUser;
}
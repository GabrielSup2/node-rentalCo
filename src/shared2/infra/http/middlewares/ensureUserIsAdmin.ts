import { AppError } from "@errors/AppError";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";

export async function ensureUserIsAdmin (req : Request, res : Response, next : NextFunction){
    const {id} = req.user

    const userRepository = new UserRepository()

    const user = await userRepository.findById(id)
    if(!user.idAdmin){
            throw new AppError("User is not authorized")
    }
    next()
}
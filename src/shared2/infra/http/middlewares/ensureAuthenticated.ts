import { compare } from "bcrypt";
import { verify } from "jsonwebtoken";
import { AppError } from "@errors/AppError";
import { NextFunction, Request, Response} from "express";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
    sub : string;
}

export async function ensureAuthenticated (req : Request, res : Response, next : NextFunction) {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new AppError("AuthHeader is missing!", 401)
    }

 

    const [, token] = authHeader.split("");

    try {
        const {sub : user_id } = verify(token, "6cb85005558098bf0130e5a422dccdfe") as IPayload

        const userRepository = new UserRepository()
        const user = userRepository.findById(user_id)

        if(!user) {
            throw new AppError("User does not exists")
        }
    
    req.user = {
        id :  user_id
    }

        next()
    }catch {
        throw new AppError("Invalid token!", 401)
    }

}
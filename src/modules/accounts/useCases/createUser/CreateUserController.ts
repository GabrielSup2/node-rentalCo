import {Request, Response} from "express"
import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { ICreateUsersDTO } from "modules/accounts/dtos/ICreateUsersDTO"

class CreateUserController{
    async handle(req : Request , res : Response): Promise<Response>{
        const {name,driver_license,username,password, email}: ICreateUsersDTO = req.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute({name,driver_license, username, password, email})

        return res.status(201).send("User saved")
    }

}

export {CreateUserController}
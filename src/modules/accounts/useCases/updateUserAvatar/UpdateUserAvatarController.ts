import { Request, Response } from "express"
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase"
import { container } from "tsyringe"

class UpdateUserAvatarcontroller{

    async handle(req : Request , res : Response) : Promise<Response>{

    const { id} = req.user
    const avatar_file = req.file.filename
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    updateUserAvatarUseCase.execute({  user_id : id, avatar_file })
    return res.status(200).send()
    }
} 

export  {UpdateUserAvatarcontroller}
import { Router } from "express";
import { AutenticateUserController } from "modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const autenticateRoutes = Router()

const autenticateUserController = new AutenticateUserController()



autenticateRoutes.post("/sessions", autenticateUserController.handle)

export {autenticateRoutes}



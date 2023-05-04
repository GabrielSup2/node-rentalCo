import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response, response } from "express";
class AutenticateUserController {
    async handle(req: Request, res: Response) : Promise<Response> {
        const { email, password } = req.body;

        const autenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );
        const authenticateToken = await autenticateUserUseCase.execute({
            email,
            password,
        });

        return response.json(authenticateToken);
    }
}

export { AutenticateUserController };

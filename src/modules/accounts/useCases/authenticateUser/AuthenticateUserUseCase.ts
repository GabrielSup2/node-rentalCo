import { User } from "modules/accounts/entities/User";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { injectable, inject } from "tsyringe";

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
export class AuthenticateUserUseCase {

    private securityMessage : string = "6cb85005558098bf0130e5a422dccdfe"

    constructor(
        @inject("UserRepository")
        private UserRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.UserRepository.findByemail(email);

        if (!user) {
            throw new Error("User or password does not exist");
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("User or password does not exist");
        }
        const token = sign({}, this.securityMessage, {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

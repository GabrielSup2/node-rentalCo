import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Repository } from "typeorm";
import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { ICreateUsersDTO } from "modules/accounts/dtos/ICreateUsersDTO";
import { AppError } from "errors/AppError";

interface Request {
    name: string;
    username: string;
    email: string;
    driver_license: string;
    password: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        username,
        email,
        driver_license,
        password,
    }: ICreateUsersDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByemail(email);

        if(userAlreadyExists){
            throw new AppError("User Already Exists", 401)
        }

        const passwordHash = await hash(password,8)

        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password: passwordHash
        });
    }
}

export { CreateUserUseCase };

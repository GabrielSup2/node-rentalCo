import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({
        driver_license,
        email,
        name,
        password,
    }: ICreateUsersDTO): Promise<void> {
        const user = new User();
        Object.assign(user, {
            driver_license,
            email,
            name,
            password,
        });
       await  this.users.push(user)
     
    }
   async findByemail(email: any): Promise<User> {
        return await this.users.find(user => user.email === email)
    }
    async findById(id: any): Promise<User> {
        return await this.users.find(user => user.id === id)
    }
}

export {UsersRepositoryInMemory}
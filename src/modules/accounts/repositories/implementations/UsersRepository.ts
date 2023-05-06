import { Repository } from "typeorm";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import dataSource from "../../../../database/index";
class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = dataSource.getRepository(User);
    }

   

    async create({        name,
        username,
        email,
        driver_license,
        password,
        avatar,
        id
    }: ICreateUsersDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
            avatar,
            id
        });
        await this.repository.save(user);
    }

    async findByemail(email: any): Promise<User> {
        const user = await this.repository.findOneBy({email})
        return user
    }

    async findById(id: any): Promise<User> {
        const user = await this.repository.findOneBy({id})
        return user
    }

}

export {UserRepository}

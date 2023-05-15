import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
    findByemail(email): Promise<User>;
    findById(id): Promise<User>
}

export { IUsersRepository };

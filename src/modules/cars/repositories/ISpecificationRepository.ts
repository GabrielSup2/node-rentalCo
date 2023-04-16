import { Specification } from "../entities/Specification";


interface ICreateEspecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateEspecificationDTO): Promise<void>;
    findByName(name: string) : Promise<Specification>
}

export { ISpecificationRepository, ICreateEspecificationDTO };

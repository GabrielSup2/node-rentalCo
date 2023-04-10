import { Specification } from "../entities/Specification";

interface ICreateEspecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateEspecificationDTO): void;
    findByName(name: string)
}

export { ISpecificationRepository, ICreateEspecificationDTO };

import "reflect-metadata";
import { Specification } from "../entities/Specification";
import { Repository } from "typeorm";
import dataSource from "../../../../../shared2/infra/typeorm/index";
import {
    ISpecificationRepository,
    ICreateEspecificationDTO,
} from "../../../repositories/ISpecificationRepository";

export class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = dataSource.getRepository(Specification);
    }

    async create({ name, description }: ICreateEspecificationDTO): Promise<void> {
        const specification =  this.repository.create({
          name,
          description
        });

        await this.repository.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specificationFound = await this.repository.findOneBy(
            {name}
        );
        return specificationFound;
    }
}



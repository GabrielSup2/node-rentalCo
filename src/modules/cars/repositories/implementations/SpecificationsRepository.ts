import { Specification } from "../../entities/Specification";
import {
    ISpecificationRepository,
    ICreateEspecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {

    private specifications: Specification[] = []

   

    create({ name, description }: ICreateEspecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }

    findByName(name: string) : Specification {
        const specificationFound = this.specifications.find(
            (specification) => specification.name === name
        );
        return specificationFound;
    }

}

export { SpecificationsRepository };

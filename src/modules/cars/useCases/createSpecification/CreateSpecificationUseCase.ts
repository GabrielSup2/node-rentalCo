import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface Irequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}
    execute({ name, description }: Irequest) {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("specification Already exists");
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };

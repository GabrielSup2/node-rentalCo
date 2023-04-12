import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface Irequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
 
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository) {}
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

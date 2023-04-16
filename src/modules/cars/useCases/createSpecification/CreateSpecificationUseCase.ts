import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import "reflect-metadata"
interface Irequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
 
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository) {}
    async execute({ name, description }: Irequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("specification Already exists");
        }
        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };

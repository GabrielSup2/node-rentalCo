import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import "reflect-metadata"
import { AppError } from "errors/AppError";
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
            throw new AppError("specification Already exists", 401);
        }
        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };

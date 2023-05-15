import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findCategory(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };

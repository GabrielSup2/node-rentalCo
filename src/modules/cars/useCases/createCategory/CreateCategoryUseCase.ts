import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name : string;
    description : string;
};

class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ name, description }: IRequest): void {
        if (this.categoriesRepository.findCategory(name)) {
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };

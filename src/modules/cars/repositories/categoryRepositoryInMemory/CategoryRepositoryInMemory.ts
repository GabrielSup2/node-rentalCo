import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "modules/cars/repositories/ICategoriesRepository";

class CategoryRepositoryInMemory implements ICategoriesRepository {
    private categories: Category[];

   

    async findCategory(name: string): Promise<Category> {
        const categoryFound = this.categories.find(
            (categoryRepository) => {
                categoryRepository.name = name;
            }
        );
        return categoryFound;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category()
        Object.assign(category, name, description)

        this.categories.push(category);
    }
}

export { CategoryRepositoryInMemory };

import { Category } from "../entities/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findCategory(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name , description} : ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };

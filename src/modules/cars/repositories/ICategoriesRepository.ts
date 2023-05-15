import { Category } from "../infra/typeorm/entities/Category";

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

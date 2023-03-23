import { Category } from "../model/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, { name, description, created_at: new Date() });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findCategory(name: string) {
        const categoryFound = this.categories.find(
            (categorie) => categorie.name === name
        );
        return categoryFound;
    }
}

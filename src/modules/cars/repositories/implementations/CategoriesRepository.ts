
import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";


import { Repository, getRepository } from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    

     constructor() {
        this.repository = getRepository(Category);
    }

    // public static getInstance(): CategoriesRepository {
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = this.repository.find();
        return categories
    }

    async findCategory(name: string): Promise<Category> {
        const categoryFound = await  this.repository.findOne(
         {name}
        );
        return categoryFound;
    }
}

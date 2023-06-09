import "reflect-metadata"
import { Category } from "../entities/Category";

import  dataSource  from "../../../../../shared2/infra/typeorm/index";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";


import { Repository} from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    

     constructor() {
        this.repository = dataSource.getRepository(Category);
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
        const categories = await this.repository.find();
        return categories
    }

    async findCategory(name: string): Promise<Category> {
        const categoryFound = await  this.repository.findOneBy(
         {name}
        );
        return categoryFound;
    }
}

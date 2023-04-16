import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase{

    private categoriesRepository: ICategoriesRepository;
    constructor(
    @inject("CategoriesRepository")
        categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

   async  execute(): Promise<Category[]>{
       

     const categories = await this.categoriesRepository.list();
    return categories
    }
    
}

export {ListCategoriesUseCase}
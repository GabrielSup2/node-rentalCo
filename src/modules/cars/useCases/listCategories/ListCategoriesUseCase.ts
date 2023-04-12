import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase{

    private categoriesRepository: ICategoriesRepository;
    constructor(
    @inject("CategoriesRepositories")
        categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

   async  execute(): Promise<Category[]>{
       

     const categories = this.categoriesRepository.list();
    return categories
    }
    
}

export {ListCategoriesUseCase}
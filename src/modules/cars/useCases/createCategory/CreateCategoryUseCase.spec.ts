import { CategoryRepositoryInMemory } from "@modules/cars/repositories/in memory/CategoryRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { AppError } from "@errors/AppError"

let createCategoryUseCase : CreateCategoryUseCase
let categoriesRepository : CategoryRepositoryInMemory


describe("Create a category", ()=>{
beforeEach(()=>{
    categoriesRepository = new CategoryRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
})
    it("Should be able to create a category", async ()=>{
        const testCategory = {
            name : "Category tester name",
            description : "Category tester description"
        }
       await  createCategoryUseCase.execute({
        name : testCategory.name, 
        description : testCategory.description})
         const categoryCreated = await categoriesRepository.findCategory(testCategory.name)
         expect(categoryCreated).toHaveProperty("id")
   }),
   it("Should not be able to create  duplicated categories", async ()=>{
         expect( async ()=>{
        const testCategory = {
            name : "Category tester name",
            description : "Category tester description"
        }
           await  createCategoryUseCase.execute({
        name : testCategory.name, 
        description : testCategory.description})
    
        await  createCategoryUseCase.execute({
            name : testCategory.name, 
            description : testCategory.description})
     }).rejects.toBeInstanceOf(AppError)
})
  

})
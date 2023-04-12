import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Multer } from "multer";
import {injectable, inject} from 'tsyringe'

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = csvParse();
            stream.pipe(parseFile);
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                   await categories.push({ name, description });
                })
                .on("end", async() => {
                    await fs.promises.unlink(file.path)
                    resolve(categories);
                })
                .on("error", async (error) => {
                    await reject(error);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map( async category =>{
            const {name, description} = category
            const existsCategory =await  this.categoriesRepository.findCategory
            if(!existsCategory){
               await  this.categoriesRepository.create({
                    name, description
                })
            }

        })
    
    }
}

export { ImportCategoryUseCase };

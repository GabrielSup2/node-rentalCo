import { Request, Response } from "express";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { container } from "tsyringe";

class ListCategoriesController {
    
    
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase =  container.resolve(ListCategoriesUseCase)
        const all =  await listCategoriesUseCase.execute();

        return res.status(200).send(all);
    }
}

export { ListCategoriesController };

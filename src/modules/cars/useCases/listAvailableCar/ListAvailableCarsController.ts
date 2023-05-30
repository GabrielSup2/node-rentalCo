import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
    async handle(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const { name, brand, category_id } = req.query;
        const listAvailableCarsUseCase = container.resolve(
            ListAvailableCarsUseCase
        );

        const cars = listAvailableCarsUseCase.execute({
            brand : brand as string,
            name : name as string,
            category_id: category_id as string
        })

        return res.json(cars)
    }
}

export{ListAvailableCarsController}
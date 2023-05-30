import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { injectable, inject} from "tsyringe";

interface IRequest {
    category_id ?: string,
    name ?: string,
    brand ?: string
}

@injectable()
class ListAvailableCarsUseCase{
    
    constructor(
        @inject("CarsRepository")
        private carRepository : ICarsRepository
        ){}
    
async execute({category_id, name, brand}: IRequest): Promise<Car[]>{

    const listOfAvailableCars = await  this.carRepository.findAvailableCars(
        category_id, name, brand)

        return listOfAvailableCars


}


}

export {ListAvailableCarsUseCase}
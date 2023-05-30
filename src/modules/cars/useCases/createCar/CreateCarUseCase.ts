import { AppError } from "@errors/AppError";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface Irequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount : number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarRepository")
        private carRepository : ICarsRepository
    ){}
   async execute({
        name,
        description,
        daily_rate,
        fine_amount,
        license_plate,
        brand,
        category_id,
    }: Irequest) :Promise<Car>{
         
        const carAlrealdyExists = this.carRepository.findByLicensePlate(license_plate)

        if(carAlrealdyExists){
            throw new AppError("Car already exists")
        }

       const car = this.carRepository.create({
            name,
            description,
            fine_amount,
            daily_rate,
            license_plate,
            brand,
            category_id})
            
        return car
    }
}

export { CreateCarUseCase };

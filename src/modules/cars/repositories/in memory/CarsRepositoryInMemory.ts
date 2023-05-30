import { IcreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
class CarsRepositoryInMemory implements ICarsRepository {
 
    cars: Car[] = [];

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: IcreateCarDTO): Promise<Car> {
        const car = new Car();
        Object.assign(
            car,
            {name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
            }
        );

        this.cars.push(car)
        return car
    }


    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find(car =>{
            car.license_plate === license_plate
        })
    }

    async findAvailableCars(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
        const availableCars = this.cars.filter(car => car.available === true);
        return availableCars
    }
}

export { CarsRepositoryInMemory };
import { IcreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Car } from "../entities/Car";
import { Repository } from "typeorm";
import dataSource from "@shared/infra/typeorm";

class CarsRepository implements ICarsRepository {
    
        private carRepository : Repository<Car>
        constructor(){
            this.carRepository = dataSource.getRepository(Car)
        }
      async  create( {name,
            description,
            daily_rate,
            license_plate,



            
            fine_amount,
            brand,
            category_id}: IcreateCarDTO): Promise<Car> {
               const car =  this.carRepository.create({
                    name,
                    description,
                    daily_rate,
                    license_plate,
                    fine_amount,
                    brand,
                    category_id})

                await this.carRepository.save(car)
         return car
        }
   
   async  findByLicensePlate(license_plate: string): Promise<Car> {
       const carFound = this.carRepository.findOneBy({license_plate})
        return carFound
    }

    async findAvailableCars (brand?:string, category_id?: string, name?:string){
        const availableCarsQuery = this.carRepository.createQueryBuilder("availableCars")
        .where("available = :available", {available : true});

        if(brand){
            availableCarsQuery.andWhere("availableCars.brand = : brand", {brand})
        }

        if(category_id){
            availableCarsQuery.andWhere("availableCars.category_id = : category_id", {category_id})
        }

        if(name){
            availableCarsQuery.andWhere("availableCars.name = : name", {name})
        }

        const availableCars = await availableCarsQuery.getMany()

        return availableCars
    }

}

export {CarsRepository}
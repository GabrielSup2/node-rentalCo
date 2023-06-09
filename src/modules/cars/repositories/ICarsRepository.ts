import { IcreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    create(data: IcreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    findAvailableCars(brand?:string, category_id?: string, name?:string): Promise<Car[]>;
}

export { ICarsRepository };

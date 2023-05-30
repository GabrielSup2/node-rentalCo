import { describe } from "node:test";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in memory/CarsRepositoryInMemory";
import { AppError } from "@errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    });

    it("It should be able to create a new car", async () => {
       const car = await createCarUseCase.execute({
            name: "name",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12345",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id")
    });

    it("Should not be able to create duplicated cars", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "car 1",
                description: "Description",
                daily_rate: 100,
                license_plate: "Abc-12345",
                fine_amount: 100,
                brand: "Brand",
                category_id: "category",
            });

            await createCarUseCase.execute({
                name: "car 2",
                description: "Description",
                daily_rate: 100,
                license_plate: "Abc-12345",
                fine_amount: 100,
                brand: "Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("It should create a car with available propertie name set true as default", async () => {
       const  car =  await createCarUseCase.execute({
            name: "name",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12345",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });

        expect(car.available).toBe(true)
    })

});

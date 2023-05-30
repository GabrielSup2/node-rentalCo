import { CarsRepositoryInMemory } from "@modules/cars/repositories/in memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List available cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("Should be able to list all available cars", async () => {
        const createdCar = await carsRepositoryInMemory.create({
            name: "Audi",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12345",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });
        const listOfAvailableCarscars = await listAvailableCarsUseCase.execute(
            {}
        );

        expect(listOfAvailableCarscars).toEqual([createdCar]);
    });

    it("Should be able to list all available cars filtered by name", async () => {
        const createdCar = await carsRepositoryInMemory.create({
            name: "Audi name",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12225",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });
        const listOfAvailableCarsFilteredByName =
            await listAvailableCarsUseCase.execute({ name: "Audi name" });

        expect(listOfAvailableCarsFilteredByName).toEqual([createdCar]);
    });

    it("Should be able to list all available cars filtered by brand", async () => {
        const createdCar = await carsRepositoryInMemory.create({
            name: "Audi brand",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12225",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });
        const listOfAvailableCarsFilteredByBrand =
            await listAvailableCarsUseCase.execute({ brand: "Audi name" });

        expect(listOfAvailableCarsFilteredByBrand).toEqual([createdCar]);
    });

    it("Should be able to list all available cars filtered by category", async () => {
        const createdCar = await carsRepositoryInMemory.create({
            name: "Audi category",
            description: "Description",
            daily_rate: 100,
            license_plate: "Abc-12225",
            fine_amount: 100,
            brand: "Brand",
            category_id: "category",
        });
        const listOfAvailableCarsFilteredBycategory =
            await listAvailableCarsUseCase.execute({ category_id: "category" });

        expect(listOfAvailableCarsFilteredBycategory).toEqual([createdCar]);
    });
});

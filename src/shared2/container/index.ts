import {container} from "tsyringe"
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository"
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository"
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository"
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository"
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository"

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<CarsRepository>(
    "CarsRepository",
    CarsRepository
)


import "reflect-metadata";
import { Router } from "express";
import {categoriesRoutes} from "./categories.routes"
import {specificationsRoutes} from "./specification.routes"
import {usersRoutes} from "./users.routes"
import { autenticateRoutes } from "./autenticate.routes";
import  {carsRoutes} from "./cars.routes"

const router = Router()

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes)
router.use("/cars", usersRoutes)
router.use(autenticateRoutes)

export {router}
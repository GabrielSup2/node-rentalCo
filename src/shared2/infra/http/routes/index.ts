import { Router } from "express";
import {categoriesRoutes} from "./categories.routes"
import {specificationsRoutes} from "./specification.routes"
import {usersRoutes} from "./users.routes"
import { autenticateRoutes } from "./autenticate.routes";

const router = Router()

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes)
router.use(autenticateRoutes)

export {router}
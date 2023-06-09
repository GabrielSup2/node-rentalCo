import { Router } from "express";
import multer from "multer";

import  {CreateCategoryController}  from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin";


const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

categoriesRoutes.post("/",ensureAuthenticated, ensureUserIsAdmin ,createCategoryController.handle);

categoriesRoutes.get("/",  listCategoriesController.handle);

categoriesRoutes.post("/import",ensureAuthenticated, ensureUserIsAdmin , upload.single("file"), importCategoryController.handle)
;

export { categoriesRoutes };

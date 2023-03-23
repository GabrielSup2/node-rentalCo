import { Router } from "express";
import { Category } from "../model/category";
import { CategoriesRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    if(categoriesRepository.findCategory(name)){
        return res.status(400).send("Category already exists")
    }

    categoriesRepository.create({ name, description });
    
    res.status(201).send("Categories saved : ");
});

categoriesRoutes.get("/", (req,res)=>{
    const categories = categoriesRepository.list()
    res.status(201).json(categories)
})

export { categoriesRoutes };

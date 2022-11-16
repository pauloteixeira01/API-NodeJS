import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res
      .status(400)
      .json({ error: true, message: "Category already exists!" });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).json({
    error: false,
    message: "Successful in registering category!",
  });
});

categoriesRoutes.get("/", (req, res) => {
  const listAll = categoriesRepository.list();

  return res.status(200).json({
    error: false,
    data: listAll,
  });
});

export { categoriesRoutes };

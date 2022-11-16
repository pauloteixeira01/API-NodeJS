import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => console.log("Server running in port 3000"));

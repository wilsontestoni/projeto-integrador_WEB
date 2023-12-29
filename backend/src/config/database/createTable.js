import sequelize from "./database.js";
import User from "../../models/User.js";
import Courses from "../../models/Courses.js";

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas Criadas.");
  })
  .catch((error) => {
    console.error("Erro ao criar tabelas", error);
  });

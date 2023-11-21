import sequelize from "./src/config/database.js";
import User from "./src/models/User.js";
import Courses from "./src/models/Courses.js";

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas Criadas.");
  })
  .catch((error) => {
    console.error("Erro ao criar tabelas", error);
  });

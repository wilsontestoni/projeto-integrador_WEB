import Sequelize from "sequelize";

const sequelize = new Sequelize("pi", "root", "3330", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

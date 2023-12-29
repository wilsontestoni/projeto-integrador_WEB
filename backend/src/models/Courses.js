import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Courses = sequelize.define("Courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  course_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  course_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  course_description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  course_duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_class1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_class2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_class3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Courses;

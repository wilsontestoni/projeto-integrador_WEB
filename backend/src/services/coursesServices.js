import Courses from "../models/Courses.js";

export const getCoursesByCategory = async (categoria) => {
  const CoursesByCategory = await Courses.findAll({
    where: {
      course_category: categoria,
    },
  });

  return CoursesByCategory;
};

export const deleteCourseByName = async (courseName) => {
  const deletedCourse = await Courses.destroy({
    where: { course_name: courseName },
  });

  return deletedCourse;
};

export const createCourseService = async (formData, imagePath) => {
  const course = await Courses.create({
    ...formData,
    image_url: imagePath.replace("src\\images\\", "/images/"), // o arquivo estava chegando com o caminho errado no banco, por isso o replace
  });

  return course;
};

export const updateCourseByName = async (courseName, updatedCourse) => {
  const curso = await Courses.update(updatedCourse, {
    where: { course_name: courseName },
  });

  return curso;
};

export const getCourseByName = async (courseName) => {
  const course = await Courses.findOne({ where: { course_name: courseName } });

  return course;
};

import upload from "../config/multerConfig.js";
import express from "express";
import {
  getCourses,
  deleteCourse,
  createCourse,
  updateCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.get("/:categoria", getCourses);
router.delete("/:curso", deleteCourse);
router.post("/criar", upload.single("image_url"), createCourse);
router.put("/:curso", updateCourse);

export default router;

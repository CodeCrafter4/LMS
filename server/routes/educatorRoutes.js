import express from "express";
import { addCourse, educatorDashboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator } from "../controllers/educatorController.js";
import upload from "../configs/multer.js";
import { protecteEducator } from "../middlewares/authMiddleware.js";

const educatorRouter = express.Router();

//Add Educator Role

educatorRouter.get("/update-role", updateRoleToEducator);
educatorRouter.post('/add-course',upload.single('image'),protecteEducator,addCourse)
educatorRouter.get('/courses', protecteEducator,getEducatorCourses)
educatorRouter.get("/dashboard", protecteEducator, educatorDashboardData);
educatorRouter.get("/enrolled-students", protecteEducator, getEnrolledStudentsData);


export default educatorRouter;

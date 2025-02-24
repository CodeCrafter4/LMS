import express from 'express';
import { getUserData, purchasedCourse, UserEnrolledCourses } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/data',getUserData)
userRouter.get('/enrolled-courses',UserEnrolledCourses)
userRouter.post("/purchase", purchasedCourse);


export default userRouter;
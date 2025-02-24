import express from 'express';
import { getAllCourse, getcourseId } from '../controllers/courseController.js';

const courseRouter =express.Router()

courseRouter.get('/all',getAllCourse)
courseRouter.get("/:id", getcourseId);

export default courseRouter;


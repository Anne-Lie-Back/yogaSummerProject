const express = require('express')
const router = express.Router()

const { Course } = require('../models/course.model')

const {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../handlers/course.handler')

//GET all courses
router.get('/',getAllCourses, (req, res) => {
    res.status(200).json(res.allCourses)
})

//GET ONE course
router.get('/:id', (req, res) => {
    res.status(200), json(res)
})

//POST new course
router.post('/', createCourse, (req, res) => {
    res.status(200).json(res.createdCourse)
})

//UPDATE course and/or participants
router.put('/:id', updateCourse, (req, res) => {
      res.status(200).json(res.updatedCourse);
    }
  );

//UPDATE course participants

//DELETE course
router.delete('/:id', deleteCourse, (req,res) => {
    res.status(200).json(res.deletedCourse)
})

//DELETE course participants

module.exports = router
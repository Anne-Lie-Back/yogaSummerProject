const express = require('express')
const router = express.Router()

//GET all courses
router.get('/', (req, res) => {
    res.status(200).json(res)
})

//GET ONE course
router.get('/:id', (req, res) => {
    res.status(200), json(res)
})

//POST new course
router.post('/', (req,res) => {
    res.status(200).json(res)
})

//UPDATE course and/or participants
router.put('/:id', (req, res) => {
    res.status(200).json(res)
})

//UPDATE course participants

//DELETE course
router.delete('/:id', (req,res) => {
    res.status(res)
})

//DELETE course participants
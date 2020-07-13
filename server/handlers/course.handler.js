const { Course } = require('../models/course.model')

/**GET ALL COURSES **/
const getAllCourses = (req, res, next) => {
    Course.find({}, (err, courses) => {
        try {
            if(err) next(err)
            if(!courses || courses.length === 0){
                throw new Error("Couldn't find any courses")
            }
            else {
                res.allCourses = courses
                next()
            }
        } catch (err) {
            next(err)
        }
    } 
    )
}

/** GET ONE COURSE BY ID */

/** POST NEW COURSE */

const createCourse = (req, res, next) => {
    Course.create(req.body, (err, createdCourse) => {
        try {
            if(err) next(err)
            if(!createdCourse) throw new Error("couldn't create course")
            res.createdCourse = createdCourse
            next()
        } catch (err){next(err)}
    })
}

/** UPDATE COURSE OR PARTICIPANTS */

/** DELETE COURSE */

/**EXPORT**/
module.exports = {
    getAllCourses,
    createCourse
}
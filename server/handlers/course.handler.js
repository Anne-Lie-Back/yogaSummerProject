const { Course } = require('../models/course.model')
const { ErrorHandler } = require('../helpers/error.helper')

/**GET ALL COURSES **/
const getAllCourses = (req, res, next) => {
    Course.find({}, (err, courses) => {
        try {
            if(err) next(err)
            if(!courses || courses.length === 0){
                throw new ErrorHandler(404, "Couldn't find any courses")
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
            if(!createdCourse) throw new ErrorHandler(400, "couldn't create course")
            res.createdCourse = createdCourse
            next()
        } catch (err){
            next(err)}
    })
}

/** UPDATE COURSE **/
const updateCourse = (req, res, next) => {
    Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, course) => {
        if (error) next(error);
        try {
          if (!course) {
            throw new ErrorHandler(404, "Couldn't find course to update");
          } else {
            res.updatedCourse = course;
            next();
          }
        } catch (error) {
          next(error);
        }
      }
    );
  };
/** DELETE COURSE */

const deleteCourse = (req, res, next) => {
    Course.findByIdAndDelete(req.params.id, (err, deletedCourse) => {
        if(err) next(err)
        try {
            if(!deletedCourse){
                throw new ErrorHandler(404, "Couldn't find course to delete")
            }else{
                res.deletedCourse = deletedCourse
                next()
            }
        } catch(err) {
            next(err)
        }
    })
}
/**EXPORT**/
module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse
}
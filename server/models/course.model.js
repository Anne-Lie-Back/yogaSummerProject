const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        yoga: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        nrOfSeats: {
            type: Number,
            required: true
        },
        participants: {
            type: [
                {
                    name: {
                        type: String
                    },
                    phoneNumber: {
                        type: String
                    },
                    email: {
                        type: String
                    },
                    havePaid: {
                        type: Boolean
                    }
                }
            ]
        }
    }
)

const Course = mongoose.model('Course', CourseSchema)

module.exports = {Course, CourseSchema}
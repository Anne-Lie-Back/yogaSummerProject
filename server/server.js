const express = require('express')
const app = express()
const cors = require('cors')

const {connectToDb, mongoose} = require('./mongo')

const courseRouter = require('./routers/course.router')
const { handleError } = require('./helpers/error.helper')
connectToDb()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000']
    })
)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/** ADD API RESOURCES */
app.use('/api/courses', courseRouter)
const PORT = 8080

/** ERROR HANDLING */
app.use((err, req, res, next) => {
    handleError(err, res)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost/${PORT}`)
})
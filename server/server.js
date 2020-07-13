const express = require('express')
const app = express()
const cors = require('cors')

const {connectToDb, mongoose} = require('./mongo')

const courseRouter = require('./routers/course.router')
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

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost/${PORT}`)
})
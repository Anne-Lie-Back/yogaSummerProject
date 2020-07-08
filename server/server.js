const express = require('express')
const app = express()
const cors = require('cors')

const {connectToDb, mongoose} = require('./mongo')

connectToDb()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000']
    })
)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost/${PORT}`)
})
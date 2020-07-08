const mongoose = require('mongoose')

async function connectToDb(){
    try{
        mongoose.connect('mongodb://localhost/yogaSite', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
        console.log('connected to db')
    }catch (err){
        console.log('Failed to connect to databas: ', err)
    }
}

module.exports = {
    connectToDb,
    mongoose
}

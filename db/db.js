const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/cities'; // this is the name of the MongoDB Database

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
   console.log(`${connectionString} is on and connected`)
})
mongoose.connection.on('disconnected', () =>{
    console.log(`mongoose is disconnected to ${connectionString}`)
})
mongoose.connection.on('err', () => {
    console.log(`mongoose has an error ${err}`)
})

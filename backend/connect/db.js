const mongoose = require('mongoose');
const mongoURI = ""
const secret = "";


const connectToDatabase = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("database connected succesfully")
    } ).catch(()=> console.log('not connected'));
}

module.exports = {
    connectToDatabase,   
    secret,
}
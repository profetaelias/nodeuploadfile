const mongoose = require('mongoose');

const connectMongoose = () => {
    mongoose.connect('mongodb://localhost:27017/uploadfile', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectMongoose;
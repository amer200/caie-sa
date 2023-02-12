const mongoose = require('mongoose');
const servSchema = mongoose.Schema({
    img: String,
    content: {
        ar: String
    },
    title: {
        ar: String
    }
})

module.exports = mongoose.model('Serv', servSchema);
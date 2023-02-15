const mongoose = require('mongoose');

const slideImgSchema = mongoose.Schema({
    img: String
})

module.exports = mongoose.model('Slide', slideImgSchema);
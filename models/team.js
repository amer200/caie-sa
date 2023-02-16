const mongoose = require('mongoose');

const teamScheam = mongoose.Schema({
    name: String,
    job: String,
    img: String,
    facebook: String,
    twitter: String,
    linkedin: String
})

module.exports = mongoose.model('Team', teamScheam);
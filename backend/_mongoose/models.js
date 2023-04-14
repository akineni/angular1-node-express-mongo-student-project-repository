const mongoose = require("mongoose");
const { studentSchema } = require("./schemas");

module.exports = {
    studentModel: mongoose.model('Student', studentSchema)
}
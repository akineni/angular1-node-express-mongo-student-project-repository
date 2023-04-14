const mongoose = require('mongoose')

schemas = {
    studentSchema: new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        matricNumber: {
            type: String,
            required: true,
            unique: true
        },
        approved: {
            type: Boolean,
            default: false
        }
    })
}

module.exports = schemas
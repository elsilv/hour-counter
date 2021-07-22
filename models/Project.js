const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    workingHours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'workingHour'
        }
    ]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
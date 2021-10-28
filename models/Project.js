const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        maxLength: 600
    },
    completed: {
        type: Boolean,
        default: false
    },
    workingHours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WorkingHour'
          }
    ]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
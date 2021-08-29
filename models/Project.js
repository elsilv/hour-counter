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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String
    },
    compiled: {
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
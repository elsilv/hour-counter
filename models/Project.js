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
    }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
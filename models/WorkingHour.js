const mongoose = require('mongoose');

const workingHoursSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    },
    amount: {
        type: Number,
        required: true,
        max: 10000,
        min: 0
    },
    created : {
        type: Date,
        default: Date.now
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
}); 

module.exports = mongoose.model('WorkingHour', workingHoursSchema);
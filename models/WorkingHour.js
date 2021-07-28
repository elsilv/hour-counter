const mongoose = require('mongoose');

const workingHoursSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
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
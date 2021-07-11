const WorkingHour = require('../models/WorkingHour');

// GET /api/workingHours 
exports.getWorkingHours = async (req, res, next) => {
    try {
        const workingHours = await WorkingHour.find();
    
        return res.status(200).json({
            success: true,
            count: workingHours.length,
            data: workingHours
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// POST /api/workingHours
exports.addWorkingHours = async (req, res, next) => {
    res.send('POST workingHours');
}

// @route DELETE /api/workingHours/:id
exports.deleteWorkingHours = async (req, res, next) => {
    res.send('DELETE workingHours');
}
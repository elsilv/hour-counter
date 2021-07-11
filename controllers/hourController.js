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
    try {
        const { text, amount } = req.body;

        const workingHour = await WorkingHour.create(req.body);
        return res.status(201).json({
            success: true,
            data: workingHour
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// DELETE /api/workingHours/:id
exports.deleteWorkingHours = async (req, res, next) => {
    try {
        const workingHour = await WorkingHour.findById(req.params.id);

        if(workingHour) {
            await workingHour.remove();
            return res.status(200).json({
                success: true
            })
        }

        else { 
            res.status(404).json({
            success: false,
            error: 'No found'
            });
        }
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}
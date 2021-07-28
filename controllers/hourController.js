const WorkingHour = require('../models/WorkingHour');
const Project = require('../models/Project');

// GET /api/workingHours 
exports.getWorkingHours = async (req, res, next) => {
    try {
        const workingHours = await WorkingHour.find().populate('Project', { name: 1, amount: 1 });
    
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
        const body = req.body
        const workingHour = await WorkingHour.create(body)

        const project = await Project.findById(body.project) 
        workingHour.project = project._id

        const savedWorkingHour = await workingHour.save()
        project.workingHours = project.workingHours.concat(savedWorkingHour._id)
        await project.save()

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
        const project = await Project.findById(workingHour.project) 
    
        if(workingHour) {
            project.workingHours = project.workingHours.remove(workingHour)
            await workingHour.remove()
            await project.save()

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
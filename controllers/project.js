const jwt = require('jsonwebtoken');
const config = require('config');
const Project = require('../models/Project');
const User = require('../models/User');
const WorkingHour = require('../models/WorkingHour');

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

// GET /api/projects
exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find()
                            .populate('user', { username: 1, email: 1 })
                            .populate('workingHours')

        return res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// POST /api/projects
exports.addProjects = async (req, res, next) => {
    try {
        const { name, amount } = req.body

        const token = getTokenFrom(req)
        const decodedToken = jwt.verify(token, config.get('jwtSecret'))

        if (!token || !decodedToken.id) {
          return response.status(401).json({ error: 'token missing or invalid' })
        }

        const user = await User.findById(decodedToken.id)

        const project = await Project.create(req.body)
        project.user = user._id

        const savedProject = await project.save()
        user.projects = user.projects.concat(savedProject._id)
        await user.save()

        return res.status(201).json({
            success: true,
            data: project
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// DELETE /api/projects/:id
exports.deleteProjects = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        const user = await User.findById(project.user)

        if(project) {
            user.projects = user.projects.remove(project)
            await WorkingHour.deleteMany({project : req.params.id})
            await project.remove()
            await user.save()

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

// PUT /api/projects/:id
exports.changeCompleted = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);

        const filter = { _id: req.params.id };
        const update = { completed: !project.completed };
        
        await Project.findByIdAndUpdate(filter, update, { new: true })
        .then(updatedProject => {
            updatedProject.save()
            //console.log(updatedProject.completed)
            return res.status(200).json({
                success: true,
                data: updatedProject
            })
            
          })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// PUT /api/projects/:id
exports.editProject = async (req, res, next) => {
    try {
        const filter = { _id: req.params.id };
        const update = req.body;

        await Project.findByIdAndUpdate(filter, update, { new: true })
        .then(updatedProject => {
            return res.status(200).json({
                success: true,
                data: updatedProject
            })
            
          })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}
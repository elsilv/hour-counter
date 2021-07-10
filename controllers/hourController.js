
// GET /api/workingHours
exports.getWorkingHours = (req, res, next) => {
    res.send('GET workingHours');
}

// POST /api/workingHours
exports.addWorkingHours = (req, res, next) => {
    res.send('POST workingHours');
}

// @route DELETE /api/workingHours/:id
exports.deleteWorkingHours = (req, res, next) => {
    res.send('DELETE workingHours');
}
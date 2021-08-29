const express = require('express');
const router = express.Router();
const { getProjects, addProjects, deleteProjects, changeCompiled } = require('../controllers/project');
const { protect } = require('../middleware/auth');

router.route('/')
    .get(getProjects)
    .post(protect, addProjects);

router.route('/:id')
    .get(getProjects)
    .put(changeCompiled)
    .delete(deleteProjects);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getProjects, addProjects, deleteProjects } = require('../controllers/project');
const { protect } = require('../middleware/auth');

router.route('/')
    .get(protect, getProjects)
    .post(addProjects);

router.route('/:id')
    .delete(deleteProjects);

module.exports = router;